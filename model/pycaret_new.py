import pandas as pd
from pycaret.classification import *
import numpy as np

if __name__ == '__main__':
    data = pd.read_csv('./data/cs-training.csv')
    clf1 = setup(data=data, target='SeriousDlqin2yrs', numeric_features=['NumberOfTime30-59DaysPastDueNotWorse',
                                                                         'NumberOfTimes90DaysLate',
                                                                         'NumberOfTime60-89DaysPastDueNotWorse',
                                                                         'NumberOfDependents'],
                 fix_imbalance=True)

    # compare all baseline models and select top 5
    top5 = compare_models(n_select=5)
    # tune top 5 base models
    tuned_top5 = [tune_model(i) for i in top5]
    # ensemble top 5 tuned models
    bagged_top5 = [ensemble_model(i) for i in tuned_top5]
    # blend top 5 base models
    blender = blend_models(estimator_list=top5)
    # select best model
    best = automl(optimize='AUC')
    # finalize model
    final_clf = finalize_model(best)
    # Predict on test data
    test_data = pd.read_csv('data/cs-test.csv')
    predictions = predict_model(final_clf, data=test_data)
    submission_scores = predictions['Score']
    ids = np.arange(1, 101504)
    submission = pd.DataFrame({'Id': ids, 'Probability': submission_scores})
    submission.to_csv('submission_pycaret.csv', index=False)
