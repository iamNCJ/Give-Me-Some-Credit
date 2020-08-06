import pandas as pd
from pycaret.classification import *
import numpy as np

if __name__ == '__main__':
    data = pd.read_csv('./data/cs-training.csv')
    clf1 = setup(data=data, target='SeriousDlqin2yrs', numeric_features=['NumberOfTime30-39DaysPastDueNotWorse',
                                                                         'NumberOfTimes90DaysLate',
                                                                         'NumberOfTime60-89DaysPastDueNotWorse',
                                                                         'NumberOfDependents'],
                 fix_imbalance=True, sampling=False, verbose=False)

    # compare all baseline models and select top 3
    print('Comparing models')
    top3 = compare_models(n_select=3, verbose=False)

    # tune top 3 base models
    print('tuning models')
    tuned_top3 = [tune_model(i, optimize='AUC', verbose=False) for i in top3]

    # ensemble top 3 tuned models
    print('ensemble models')
    bagged_top3 = [ensemble_model(i, optimize='AUC', verbose=False) for i in tuned_top3]

    # blend top 3 base models
    print('blending models')
    blender = blend_models(estimator_list=top3, optimize='AUC', verbose=False)

    # select best model
    print('automl')
    best = automl(optimize='AUC')
    save_model(best, 'best_clf_saved')

    # calibrate
    print('calibrating')
    calibrated_best = calibrate_model(best, verbose=False)

    # finalize model
    print('finalizing')
    final_clf = finalize_model(calibrated_best)
    save_model(final_clf, 'final_clf_saved')

    # Predict on test data
    test_data = pd.read_csv('./data/cs-test.csv')
    predictions = predict_model(final_clf, data=test_data, verbose=False)
    submission_scores = predictions['Score']
    ids = np.arange(1, 101504)
    submission = pd.DataFrame({'Id': ids, 'Probability': submission_scores})
    submission.to_csv('submission_pycaret.csv', index=False)
