# 大作业报告

## 1. 选题



## 2. 研究背景与意义

Give Me Some Credit是2011年9月在Kaggle上举办的一个特征预测比赛，它给出了25万名借款人的历史数据，参赛者需要预测特定的借款人在接下来的两年内是否会遇到经济压力导致无法偿还借款。

本次比赛的主题为风险控制，所谓风险控制，就是评估用户可能违约的情况，降低金融风险。传统的风控技术依赖有经验的风险分析专家设计信用判断条件，或依赖回归分析等统计技术。而随着客户数目的增多，风险评估的人力成本上升，且随着大数据时代的到来，大量的数据可以被计算机有效的分析，因此利用机器学习等手段的风控技术得到了推广，本次比赛正是在此背景下举办的一场机器学习风控比赛。

机器学习技术的引入能够多维地评价用户的信用等级，从而降低风险等级，同时节省了评估成本，因而具有重要的意义。

## 3. 国内外研究现状与存在问题

Give Me Some Credit比赛已于2011年12月结束，根据Kaggle公布的数据，目前公开排行榜前三名队伍模型的AUC值分别为0.86390、0.86370以及0.86364；私人排行榜前三名队伍模型的AUC值分别为0.86955、0.86929以及0.86928 。

参赛队伍的成绩区分度不高，公开排行榜约83%的参赛队伍模型的AUC值均在0.8以上，同时最高分数也没有超过0.9，这说明设计一个较为优秀的模型的难度不大，但由于数据集的性质导致预测准确率无法达到很高的水平。

## 4. 研究目标与研究内容

本项目的研究目标为：

- 对数据集进行可视化分析，了解特征与标签之间的关系，并对数据集进行特征工程处理；
- 对比逻辑回归、SVM、随机森林、决策树等多种预测模型，比较其准确率、召回率、AUC等多个指标；
- 选择效果较好的模型进行进一步的优化，最终模型具有较高的预测准确率，AUC达到0.8以上；
- 制作一个基于Web UI的风控产品Demo，通过用户输入的特征数据预测其风险指数。

本项目的研究内容为：

- 引入数据集，分析特征变量的类型、缺失值情况、相关性等；
- 对数据集进行特征处理，填充缺失值、对样本进行欠采样和过采样、划分训练集和测试集等；
- 对几个备选模型进行基准测试，比较其各项指标，选择效果较好的5个模型进行调优；
- 使用机器学习框架进行模型参数调优，并对调优后的5个模型进行集成学习，最后将其混合，综合5个模型的预测结果产生最终预测结果；
- 对模型进行可视化分析，分析各特征变量对预测结果的贡献度；
- 将模型迁移到Web UI，实现交互式风控预测产品Demo。

## 5. 研究方法与模型思路

## 6. 数据集分析

|                                      | Data Type |
| :----------------------------------- | --------- |
| Unnamed: 0                           | ID Column |
| SeriousDlqin2yrs                     | Label     |
| RevolvingUtilizationOfUnsecuredLines | Numeric   |
| age                                  | Numeric   |
| NumberOfTime30-59DaysPastDueNotWorse | Numeric   |
| DebtRatio                            | Numeric   |
| MonthlyIncome                        | Numeric   |
| NumberOfOpenCreditLinesAndLoans      | Numeric   |
| NumberOfTimes90DaysLate              | Numeric   |
| NumberRealEstateLoansOrLines         | Numeric   |
| NumberOfTime60-89DaysPastDueNotWorse | Numeric   |
| NumberOfDependents                   | Numeric   |

![](pre.png)

|      | Description                  | Value        |
| ---- | ---------------------------- | ------------ |
| 0    | session_id                   | 2689         |
| 1    | Target Type                  | Binary       |
| 2    | Label Encoded                | None         |
| 3    | Original Data                | (150000, 12) |
| 4    | Missing Values               | True         |
| 5    | Numeric Features             | 11           |
| 6    | Categorical Features         | 0            |
| 7    | Ordinal Features             | False        |
| 8    | High Cardinality Features    | False        |
| 9    | High Cardinality Method      | None         |
| 10   | Sampled Data                 | (150000, 12) |
| 11   | Transformed Train Set        | (104999, 10) |
| 12   | Transformed Test Set         | (45001, 10)  |
| 13   | Numeric Imputer              | mean         |
| 14   | Categorical Imputer          | constant     |
| 15   | Normalize                    | False        |
| 16   | Normalize Method             | None         |
| 17   | Transformation               | False        |
| 18   | Transformation Method        | None         |
| 19   | PCA                          | False        |
| 20   | PCA Method                   | None         |
| 21   | PCA Components               | None         |
| 22   | Ignore Low Variance          | False        |
| 23   | Combine Rare Levels          | False        |
| 24   | Rare Level Threshold         | None         |
| 25   | Numeric Binning              | False        |
| 26   | Remove Outliers              | False        |
| 27   | Outliers Threshold           | None         |
| 28   | Remove Multicollinearity     | False        |
| 29   | Multicollinearity Threshold  | None         |
| 30   | Clustering                   | False        |
| 31   | Clustering Iteration         | None         |
| 32   | Polynomial Features          | False        |
| 33   | Polynomial Degree            | None         |
| 34   | Trignometry Features         | False        |
| 35   | Polynomial Threshold         | None         |
| 36   | Group Features               | False        |
| 37   | Feature Selection            | False        |
| 38   | Features Selection Threshold | None         |
| 39   | Feature Interaction          | False        |
| 40   | Feature Ratio                | False        |
| 41   | Interaction Threshold        | None         |
| 42   | Fix Imbalance                | False        |
| 43   | Fix Imbalance Method         | SMOTE        |

## 7. 实验与分析

|  | Model | Accuracy                        | AUC    | Recall | Prec.  | F1     | Kappa  | MCC    | TT (Sec) |
| :---- | :------------------------------ | :----- | :----- | :----- | :----- | :----- | :----- | :------- | ------ |
| 0     | Light Gradient Boosting Machine | 0.9374 | 0.8642 | 0.1872 | 0.6029 | 0.2856 | 0.2622 | 0.3123   | 0.5467 |
| 1     | Gradient Boosting Classifier    | 0.9371 | 0.8634 | 0.1932 | 0.5911 | 0.2912 | 0.2670 | 0.3136   | 8.6303 |
| 2     | CatBoost Classifier             | 0.9359 | 0.8632 | 0.1898 | 0.5603 | 0.2834 | 0.2583 | 0.3006   | 7.0050 |
| 3     | Ada Boost Classifier            | 0.9357 | 0.8571 | 0.2068 | 0.5499 | 0.3004 | 0.2740 | 0.3105   | 2.0539 |
| 4     | Extreme Gradient Boosting       | 0.9354 | 0.8571 | 0.1941 | 0.5480 | 0.2864 | 0.2606 | 0.2998   | 5.1748 |
| 5     | Ridge Classifier                | 0.9333 | 0.0000 | 0.0178 | 0.5410 | 0.0344 | 0.0303 | 0.0881   | 0.0194 |
| 6     | Logistic Regression             | 0.9332 | 0.6709 | 0.0134 | 0.5253 | 0.0260 | 0.0228 | 0.0744   | 0.4328 |
| 7     | Linear Discriminant Analysis    | 0.9331 | 0.6922 | 0.0969 | 0.4976 | 0.1621 | 0.1434 | 0.1979   | 0.0679 |
| 8     | Extra Trees Classifier          | 0.9329 | 0.8248 | 0.1857 | 0.4957 | 0.2701 | 0.2425 | 0.2751   | 0.8691 |
| 9     | Random Forest Classifier        | 0.9327 | 0.7801 | 0.1654 | 0.4899 | 0.2472 | 0.2209 | 0.2573   | 0.3117 |
| 10    | Naive Bayes                     | 0.9324 | 0.7002 | 0.0247 | 0.4115 | 0.0464 | 0.0390 | 0.0866   | 0.0136 |
| 11    | K Neighbors Classifier          | 0.9316 | 0.5681 | 0.0192 | 0.3126 | 0.0362 | 0.0287 | 0.0632   | 0.1122 |
| 12    | Quadratic Discriminant Analysis | 0.9096 | 0.7967 | 0.3987 | 0.3472 | 0.3706 | 0.3222 | 0.3234   | 0.0242 |
| 13    | Decision Tree Classifier        | 0.8960 | 0.6083 | 0.2750 | 0.2487 | 0.2612 | 0.2054 | 0.2057   | 0.5028 |
| 14    | SVM - Linear Kernel             | 0.8441 | 0.0000 | 0.1130 | 0.3056 | 0.0364 | 0.0158 | 0.0427   | 0.1550 |

## 8. 结论与展望

## 9. 参考文献

Weiming, J., n.d. *Mastering Python For Finance - Second Edition*.

Sun, J., Jia, M. Y., & Li, H. (2011). AdaBoost ensemble for financial distress prediction: An empirical comparison with data from Chinese listed companies. *Expert Systems with Applications*, *38*(8), 9305-9312.

Aziz S., Dowling M. (2019) Machine Learning and AI for Risk Management. In: Lynn T., Mooney J., Rosati P., Cummins M. (eds) Disrupting Finance. Palgrave Studies in Digital Business & Enabling Technologies. Palgrave Pivot, Cham

Leo, M., Sharma, S., & Maddulety, K. (2019). Machine learning in banking risk management: A literature review. *Risks*, *7*(1), 29.