<template>
    <v-app>
        <v-app-bar
                app
                color="primary"
                dark
        >
            <div class="d-flex align-center">
                <v-icon large >mdi-finance</v-icon>
                <v-toolbar-title>Model Demo</v-toolbar-title>
            </div>

            <v-spacer></v-spacer>
        </v-app-bar>

        <v-main>
            <v-card-text>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center"
                                  hide-details label="Revolving Utilization Of Unsecured Lines"
                                  v-model="RevolvingUtilizationOfUnsecuredLines">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="RevolvingUtilizationOfUnsecuredLines"
                                ></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center" hide-details label="Age"
                                  v-model="Age">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="Age"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center"
                                  hide-details label="Number Of Time 30-59 Days Past Due Not Worse"
                                  v-model="NumberOfTime30_59DaysPastDueNotWorse">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number"
                                              v-model="NumberOfTime30_59DaysPastDueNotWorse"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center" hide-details
                                  label="Debt Ratio"
                                  v-model="DebtRatio">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="DebtRatio"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center" hide-details
                                  label="Monthly Income"
                                  v-model="MonthlyIncome">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="MonthlyIncome"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center"
                                  hide-details label="Number Of Open Credit Lines And Loans"
                                  v-model="NumberOfOpenCreditLinesAndLoans">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="NumberOfOpenCreditLinesAndLoans"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center"
                                  hide-details label="Number Of Times 90 Days Late"
                                  v-model="NumberOfTimes90DaysLate">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="NumberOfTimes90DaysLate"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center"
                                  hide-details label="Number Real Estate Loans Or Lines"
                                  v-model="NumberRealEstateLoansOrLines">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number"
                                              v-model="NumberRealEstateLoansOrLines"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider
                                class="align-center"
                                hide-details
                                label="Number Of Time 60-89 Days Past Due Not Worse"
                                v-model="NumberOfTime60_89DaysPastDueNotWorse"
                        >
                            <template v-slot:append>
                                <v-text-field
                                        class="mt-0 pt-0"
                                        hide-details
                                        single-line
                                        style="width: 60px"
                                        type="number"
                                        v-model="NumberOfTime60_89DaysPastDueNotWorse"
                                ></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="pr-4">
                        <v-slider @input="rerender" class="align-center" hide-details
                                  label="Number Of Dependents"
                                  v-model="NumberOfDependents">
                            <template v-slot:append>
                                <v-text-field class="mt-0 pt-0" hide-details single-line style="width: 60px"
                                              type="number" v-model="NumberOfDependents"></v-text-field>
                            </template>
                        </v-slider>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-progress-linear height="25" :value="result" :color="color">
                <strong>Risk {{ (this.result - 50) * 2 }}%</strong>
            </v-progress-linear>
        </v-main>
    </v-app>
</template>

<script>

    import _predict from './scripts/AdaBoostClassifier'

    export default {
        name: 'App',

        components: {},

        data: () => ({
            RevolvingUtilizationOfUnsecuredLines: 1,
            Age: 2,
            NumberOfTime30_59DaysPastDueNotWorse: 3,
            DebtRatio: 4,
            MonthlyIncome: 5,
            NumberOfOpenCreditLinesAndLoans: 6,
            NumberOfTimes90DaysLate: 7,
            NumberRealEstateLoansOrLines: 8,
            NumberOfTime60_89DaysPastDueNotWorse: 9,
            NumberOfDependents: 30,
            result: 50,
            color: "blue"
        }),

        methods: {
            rerender() {
                const features = [NaN, this.RevolvingUtilizationOfUnsecuredLines, this.Age, this.NumberOfTime30_59DaysPastDueNotWorse,
                    this.DebtRatio, this.MonthlyIncome, this.NumberOfOpenCreditLinesAndLoans, this.NumberOfTimes90DaysLate, this.NumberRealEstateLoansOrLines,
                    this.NumberOfTime60_89DaysPastDueNotWorse, this.NumberOfDependents];
                console.log(features);
                this.result = _predict(features) * 50 + 50;
                if (this.result > 75) {
                    this.color = "red"
                } else if (this.result > 50) {
                    this.color = "amber"
                } else if (this.result === 50) {
                    this.color = "blue"
                } else {
                    this.color = "green"
                }
            }
        }

    };
</script>
