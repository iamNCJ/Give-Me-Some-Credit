# 金融科技大作业报告

## 1. 选题

本次大作业我们的选题是风险控制，需要针对一个金融科技中的风险控制场景，设计一个新模型，完成分析与报告。初次之外，我们尝试实现了模型的落地，编写了一个简易的前端，能够实时针对给出的客户数据进行风险评估，从而让模型产生实际的意义。

## 2. 研究背景与意义



## 3. 国内外研究现状与存在问题



## 4. 研究目标与研究内容



## 5. 研究方法与模型思路



## 6. 数据集分析

### 6.1 数据标签含义

从 Kaggle 官网获取数据后，我们打开里面的 `Data Dictionary.xls` 文件，可以看到里面的对于每一个标签的解释。

| Variable Name                                | Description                                                  | Type       |
| -------------------------------------------- | ------------------------------------------------------------ | ---------- |
| Serious Dlqin 2yrs                           | Person experienced 90 days past due delinquency or worse     | Y/N        |
| Revolving Utilization Of Unsecured Lines     | Total balance on credit cards and personal lines of credit except real estate and no installment debt like car loans divided by the sum of credit limits | percentage |
| age                                          | Age of borrower in years                                     | integer    |
| Number Of Time 30-59 Days Past Due Not Worse | Number of times borrower has been 30-59 days past due but no worse in the last 2 years. | integer    |
| Debt Ratio                                   | Monthly debt payments, alimony,living costs divided by monthly gross income | percentage |
| Monthly Income                               | Monthly income                                               | real       |
| Number Of Open Credit Lines And Loans        | Number of Open loans (installment like car loan or mortgage) and Lines of credit (e.g. credit cards) | integer    |
| Number Of Times 90 Days Late                 | Number of times borrower has been 90 days or more past due.  | integer    |
| Number Real Estate Loans Or Lines            | Number of mortgage and real estate loans including home equity lines of credit | integer    |
| Number Of Time 60-89 Days Past Due Not Worse | Number of times borrower has been 60-89 days past due but no worse in the last 2 years. | integer    |
| Number Of Dependents                         | Number of dependents in family excluding themselves (spouse, children etc.) | integer    |

不过标签的含义并不是我们关系的重点，我们主要关心的是他们的类型。可以看出这些数据全部都是数值类型的，也就是说我们不需要针对标签、文本等进行特殊的编码处理了。

另外，观察我们需要预测的标签，注意到是一个 `Y/N` 的标签，也就是说我们需要解决的是一个二分类问题。下面我们就对两个类别里的数量进行可视化分析。

### 6.2 类别数量情况

首先将数据导入

```python
import pandas as pd
data = pd.read_csv('./data/cs-training.csv')
```

通过 `seaborn` 可以绘制出两个类别的数量情况

```python
plt.figure()
sns.countplot('SeriousDlqin2yrs',data=train_df)
plt.savefig('classes')
```

![](../model/classes.png)

不难发现类别存在严重的失衡。因此在设计模型的时候需要对此进行修正。

### 6.3 相关性检查

通过 `corr()` 得到各个维度之间的相关性。直接观察数据并不直观，因此我们使用热度图来进行可视化。

```python
# check correlation
corr = train_df.corr()
plt.figure(figsize=(19, 15))
sns.heatmap(corr, annot=True, fmt='.2g')
plt.savefig('heatmap')
```

![](../model/heatmap.png)

可以看出大部分特征之间是无关的，只有少数几个特征之间存在相关性，因此我们不对其进行单独的处理。

### 6.4 模型基准测试

简单对数据进行分析之后，我们使用主流模型的默认参数来对这些数据进行基准测试。

原先我们使用了一批sklearn中的模型来测试AUC等指标，**但是刚刚发布的 `pycaret` 2.0 版本包含了更加丰富的功能，因此我们使用这个库对我们的代码进行了重构。**

#### 6.4.1 数据预处理

我们首先使用 `setup()` 函数将数据从 `pdarray` 转存到 `pycaret` 中。

```python
clf1 = setup(data=data, target='SeriousDlqin2yrs', numeric_features=['NumberOfTime30-59DaysPastDueNotWorse',
                                                                     'NumberOfTimes90DaysLate',
                                                                     'NumberOfTime60-89DaysPastDueNotWorse',
                                                                     'NumberOfDependents'],
             fix_imbalance=True)
```

这一步有几个需要注意的地方：

1. 首先，我们需要拟合的目标是 `SeriousDlqin2yrs` ，因此需要在 `target` 参数中对其进行指定。
2. 其次，`pycaret` 会自动填充非空值，**其默认策略是对数值特征使用均值，对类别标签使用 `"const"` 类别，**由于我们的数据只有数值类型，并且我们期望的行为就是直接使用均值进行填充，因此我们不需要对其进行修改。当然，如果需要修改，也可以使用 `numeric_imputation` ， `categorical_imputation` 两个参数进行修改，非常方便。
3. 一开始自动识别的类型中，有 `NumberOfTime30-59DaysPastDueNotWorse`, `NumberOfTimes90DaysLate`, `NumberOfTime60-89DaysPastDueNotWorse`, `NumberOfDependents` 四个类型被错误地识别为了类别编码，因此我们需要手动指定他们的类型，使用 `numeric_features` 参数即可完成。
4. 最后，前面注意到了我们的数据存在严重的类别失衡，因此我们需要对数据进行修复。常见的操作是进行欠采样和过采样，**但是 `pycaret` 提供了一个更为先进的方法 SMOTE** (Synthetic Minority Over-sampling Technique) 。相较于简单的过采样， SMOTE降低了过拟合风险，对于噪音的抵抗性也更强。不过缺点也是存在的，比如运算开销加大，同时可能会生成一些“可疑的点”。不过总体而言效果优点还是远大于缺点的。另外，因为 `pycaret` 的 SMOTE 利用的是 `imblearn` 这个库，因此这个库中其他支持 `fit_resample` 方法的模块都可以被使用，非常智能。

#### 6.4.2 数据集划分

这样导入数据之后，`pycaret` 会自动在不同的采样比例下选取数据，然后使用简单的逻辑回归模型进行拟合。拟合效果如下：

![](pre.png)

由此可见，对于我们的数据，不同的采样比例影响并不是很大。因此，我们直接采用 `pycaret` 的自动划分来帮我们针对不同模型进行划分和训练。



## 7. 实验与分析

### 7.1 优化目标

首先，我们需要明确优化的目标。Kaggle 的评分规则中，明确指出了将 AUC 指标作为评分的标准，因此我们也需要围绕如何提示 AUC 来进行优化。

### 7.2 对比模型基准性能

在 `pycaret` 中，我们可以直接使用 `compare_models` 方法进行基准测试，并选取效果最好（即 AUC 指标最高）的几个模型来进行下一步的调整。

```python
# compare all baseline models and select top 5
top3 = compare_models(n_select=5)
```

基准测试结果如下：

|      | Model                           | Accuracy | AUC    | Recall | Prec.  | F1     | Kappa  | MCC    | TT (Sec) |
| :--- | :------------------------------ | :------- | :----- | :----- | :----- | :----- | :----- | :----- | -------- |
| 0    | Light Gradient Boosting Machine | 0.9366   | 0.8612 | 0.2324 | 0.5636 | 0.3288 | 0.3016 | 0.3347 | 1.3332   |
| 1    | Extreme Gradient Boosting       | 0.9365   | 0.8564 | 0.2191 | 0.5648 | 0.3156 | 0.2890 | 0.3252 | 13.3978  |
| 2    | CatBoost Classifier             | 0.9365   | 0.8597 | 0.2194 | 0.5634 | 0.3157 | 0.2891 | 0.3250 | 10.6648  |
| 3    | Random Forest Classifier        | 0.9311   | 0.7875 | 0.2288 | 0.4681 | 0.3074 | 0.2756 | 0.2953 | 0.5138   |
| 4    | Extra Trees Classifier          | 0.9306   | 0.8331 | 0.2954 | 0.4694 | 0.3625 | 0.3278 | 0.3377 | 2.3267   |
| 5    | Gradient Boosting Classifier    | 0.9297   | 0.8545 | 0.3344 | 0.4640 | 0.3886 | 0.3523 | 0.3577 | 25.6528  |
| 6    | Ada Boost Classifier            | 0.9161   | 0.8412 | 0.4335 | 0.3863 | 0.4083 | 0.3633 | 0.3641 | 5.6550   |
| 7    | Naive Bayes                     | 0.9090   | 0.7019 | 0.1141 | 0.4478 | 0.1202 | 0.0978 | 0.1553 | 0.0248   |
| 8    | Decision Tree Classifier        | 0.8909   | 0.6086 | 0.2826 | 0.2361 | 0.2572 | 0.1989 | 0.1998 | 0.7828   |
| 9    | Logistic Regression             | 0.8656   | 0.8110 | 0.5742 | 0.2662 | 0.3636 | 0.2997 | 0.3275 | 0.8013   |
| 10   | SVM - Linear Kernel             | 0.8417   | 0.0000 | 0.2052 | 0.1615 | 0.1138 | 0.0602 | 0.0814 | 0.4746   |
| 11   | Quadratic Discriminant Analysis | 0.7871   | 0.7876 | 0.6622 | 0.2124 | 0.3158 | 0.2384 | 0.2891 | 0.0398   |
| 12   | K Neighbors Classifier          | 0.7497   | 0.5970 | 0.3668 | 0.1055 | 0.1638 | 0.0669 | 0.0851 | 0.2495   |
| 13   | Ridge Classifier                | 0.6538   | 0.0000 | 0.6247 | 0.1151 | 0.1943 | 0.0918 | 0.1457 | 0.0359   |
| 14   | Linear Discriminant Analysis    | 0.6538   | 0.6966 | 0.6247 | 0.1151 | 0.1943 | 0.0918 | 0.1457 | 0.1364   |

可以看出，`Light Gradient Boosting Machine`， `Extreme Gradient Boosting`, `CatBoost Classifier` 等模型同时拥有较好的准确度表现和AUC指标，因此我们选取他们来做进一步的优化。

### 7.3 使用AutoML

`pycaret` 中内置了一些自动化机器学习的工具，可以直接使用这些工具自动完成模型的参数调整，避免手工调整的重复劳动。我们使用以下代码来实现AutoML：

```python
# tune top 5 base models
tuned_top5 = [tune_model(i) for i in top5]
# ensemble top 5 tuned models
bagged_top5 = [ensemble_model(i) for i in tuned_top5]
# blend top 5 base models
blender = blend_models(estimator_list=top5)
# select best model
best = automl(optimize='AUC')
```

下面我们将对这些代码进行解释。

#### 7.3.1 超参数调节

众所周知，一个模型的超参数对于模型的拟合效果有着重要的影响。`tune_modal()` 可以自动调整模型的超参数，

## 8. 结论与展望



## 9. 参考文献