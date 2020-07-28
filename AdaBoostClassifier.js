var AdaBoostClassifier = function() {

    var findMax = function(nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    var forest = new Array();

    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.5484386682510376) {
                if (features[3] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.6344799999993429; 
                        classes[1] = 0.010168888888888759; 
                    } else {
                        classes[0] = 0.008000000000000052; 
                        classes[1] = 0.0010488888888888891; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.06561777777778639; 
                        classes[1] = 0.0051733333333333666; 
                    } else {
                        classes[0] = 0.005004444444444475; 
                        classes[1] = 0.0014133333333333296; 
                    }
                }
            } else {
                if (features[9] <= 0.5) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.1406222222222538; 
                        classes[1] = 0.011715555555555295; 
                    } else {
                        classes[0] = 0.03515555555555485; 
                        classes[1] = 0.00882666666666665; 
                    }
                } else {
                    if (features[1] <= 1.000442087650299) {
                        classes[0] = 0.009555555555555477; 
                        classes[1] = 0.004586666666666692; 
                    } else {
                        classes[0] = 0.0013155555555555529; 
                        classes[1] = 0.0014222222222222184; 
                    }
                }
            }
        } else {
            if (features[7] <= 1.5) {
                if (features[1] <= 0.5890044569969177) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.006240000000000048; 
                        classes[1] = 0.0012799999999999977; 
                    } else {
                        classes[0] = 0.0035288888888889004; 
                        classes[1] = 0.0015555555555555503; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.01001777777777766; 
                        classes[1] = 0.005617777777777817; 
                    } else {
                        classes[0] = 0.003102222222222228; 
                        classes[1] = 0.0033866666666666763; 
                    }
                }
            } else {
                if (features[3] <= 0.5) {
                    if (features[7] <= 2.5) {
                        classes[0] = 0.0028533333333333358; 
                        classes[1] = 0.0019199999999999907; 
                    } else {
                        classes[0] = 0.0015288888888888839; 
                        classes[1] = 0.001973333333333324; 
                    }
                } else {
                    if (features[1] <= 1.0269272923469543) {
                        classes[0] = 0.00460444444444447; 
                        classes[1] = 0.006320000000000049; 
                    } else {
                        classes[0] = 0.00045333333333333375; 
                        classes[1] = 0.0015111111111111063; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.5009894967079163) {
                if (features[3] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.5872500447675792; 
                        classes[1] = 0.0134834596757335; 
                    } else {
                        classes[0] = 0.008045046987297045; 
                        classes[1] = 0.0012264503220775192; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.06448614912498972; 
                        classes[1] = 0.006301957954521647; 
                    } else {
                        classes[0] = 0.005132471161492482; 
                        classes[1] = 0.001621515323233032; 
                    }
                }
            } else {
                if (features[3] <= 1.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.18735672305752718; 
                        classes[1] = 0.02272224473092157; 
                    } else {
                        classes[0] = 0.00966295498256254; 
                        classes[1] = 0.004476650283811878; 
                    }
                } else {
                    if (features[1] <= 1.009725570678711) {
                        classes[0] = 0.014221525363555193; 
                        classes[1] = 0.006660950049839389; 
                    } else {
                        classes[0] = 0.001342056465489857; 
                        classes[1] = 0.00168657889716183; 
                    }
                }
            }
        } else {
            if (features[7] <= 1.5) {
                if (features[1] <= 0.48228320479393005) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.007985170407097064; 
                        classes[1] = 0.0020460817459074933; 
                    } else {
                        classes[0] = 0.0013710027947959136; 
                        classes[1] = 0.0008005536356421198; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.012357867248029415; 
                        classes[1] = 0.007162980086491472; 
                    } else {
                        classes[0] = 0.003914651400937634; 
                        classes[1] = 0.004156618326065433; 
                    }
                }
            } else {
                if (features[9] <= 0.5) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.003758596359171508; 
                        classes[1] = 0.0028803539832773072; 
                    } else {
                        classes[0] = 0.0028638668425378902; 
                        classes[1] = 0.003500432630721294; 
                    }
                } else {
                    if (features[2] <= 23.5) {
                        classes[0] = 0.0003892161273136898; 
                        classes[1] = 0.00014306169621091543; 
                    } else {
                        classes[0] = 0.00406133802818828; 
                        classes[1] = 0.006931429540259405; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.5009894967079163) {
                if (features[3] <= 0.5) {
                    if (features[1] <= 0.22758375108242035) {
                        classes[0] = 0.45196767121180453; 
                        classes[1] = 0.012252622650598033; 
                    } else {
                        classes[0] = 0.1105923582272971; 
                        classes[1] = 0.007842189854968568; 
                    }
                } else {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.05558266421605871; 
                        classes[1] = 0.00593148476578994; 
                    } else {
                        classes[0] = 0.015368827606045167; 
                        classes[1] = 0.004094487606524057; 
                    }
                }
            } else {
                if (features[3] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.16260901281195989; 
                        classes[1] = 0.020943108152523805; 
                    } else {
                        classes[0] = 0.0066985544145516445; 
                        classes[1] = 0.0030712077332730346; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.04303858451144195; 
                        classes[1] = 0.014140880137471978; 
                    } else {
                        classes[0] = 0.007564572540497138; 
                        classes[1] = 0.005711196908497081; 
                    }
                }
            }
        } else {
            if (features[7] <= 1.5) {
                if (features[1] <= 0.7338275909423828) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.008152890375770223; 
                        classes[1] = 0.0023182641622548792; 
                    } else {
                        classes[0] = 0.005268547311626662; 
                        classes[1] = 0.002897340747207092; 
                    }
                } else {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.013902808668348957; 
                        classes[1] = 0.009784479087685831; 
                    } else {
                        classes[0] = 0.000879817459510971; 
                        classes[1] = 0.0015463938979239597; 
                    }
                }
            } else {
                if (features[1] <= 1.0269272923469543) {
                    if (features[7] <= 2.5) {
                        classes[0] = 0.006509930017950162; 
                        classes[1] = 0.0056450295409074; 
                    } else {
                        classes[0] = 0.005033132188237454; 
                        classes[1] = 0.006918578126632166; 
                    }
                } else {
                    if (features[3] <= 2.5) {
                        classes[0] = 0.0010423054454309062; 
                        classes[1] = 0.0018471441203756192; 
                    } else {
                        classes[0] = 0.00011501135026791199; 
                        classes[1] = 0.0007289041508220792; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.3961758315563202) {
                if (features[3] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.4907695523387516; 
                        classes[1] = 0.02063352788018329; 
                    } else {
                        classes[0] = 0.006891331197903578; 
                        classes[1] = 0.001842685362661528; 
                    }
                } else {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.04972179503824793; 
                        classes[1] = 0.006192568291270916; 
                    } else {
                        classes[0] = 0.013846075263344212; 
                        classes[1] = 0.004148989027645912; 
                    }
                }
            } else {
                if (features[3] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.19636902836031597; 
                        classes[1] = 0.029753428150429116; 
                    } else {
                        classes[0] = 0.008247740706649088; 
                        classes[1] = 0.003757416212161486; 
                    }
                } else {
                    if (features[1] <= 1.0041382908821106) {
                        classes[0] = 0.0575381302551605; 
                        classes[1] = 0.020645029137898726; 
                    } else {
                        classes[0] = 0.0045302315170405874; 
                        classes[1] = 0.004549202715335161; 
                    }
                }
            }
        } else {
            if (features[7] <= 1.5) {
                if (features[1] <= 0.48228320479393005) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.00902865141753692; 
                        classes[1] = 0.0029284254387152704; 
                    } else {
                        classes[0] = 0.0016317537720368874; 
                        classes[1] = 0.0010966203074325078; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.014987210044175952; 
                        classes[1] = 0.009588924246074356; 
                    } else {
                        classes[0] = 0.004946640833487547; 
                        classes[1] = 0.005318055430393708; 
                    }
                }
            } else {
                if (features[4] <= 0.12061411887407303) {
                    if (features[2] <= 22.5) {
                        classes[0] = 0.00035017789356658815; 
                        classes[1] = 0.00012107720350467303; 
                    } else {
                        classes[0] = 0.004646926159569788; 
                        classes[1] = 0.003999186595342033; 
                    }
                } else {
                    if (features[7] <= 3.5) {
                        classes[0] = 0.007655881967867228; 
                        classes[1] = 0.00895068768486087; 
                    } else {
                        classes[0] = 0.0016465369161086476; 
                        classes[1] = 0.0036665126338477393; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.3855256587266922) {
                if (features[3] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.4572290982320376; 
                        classes[1] = 0.026155659033892293; 
                    } else {
                        classes[0] = 0.006967832192189945; 
                        classes[1] = 0.0020785401869859196; 
                    }
                } else {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.04867941292709954; 
                        classes[1] = 0.0074227009966387055; 
                    } else {
                        classes[0] = 0.014030749674166527; 
                        classes[1] = 0.004785706969108623; 
                    }
                }
            } else {
                if (features[3] <= 1.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.23897342701657834; 
                        classes[1] = 0.048304534293236265; 
                    } else {
                        classes[0] = 0.013892935172515794; 
                        classes[1] = 0.007573252529966791; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.017211464991631693; 
                        classes[1] = 0.009224099661793096; 
                    } else {
                        classes[0] = 0.004705324690000465; 
                        classes[1] = 0.004771729499792332; 
                    }
                }
            }
        } else {
            if (features[9] <= 0.5) {
                if (features[1] <= 0.7359314262866974) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.009641917669841571; 
                        classes[1] = 0.0031522026595110155; 
                    } else {
                        classes[0] = 0.005422012918846927; 
                        classes[1] = 0.0037652839488068824; 
                    }
                } else {
                    if (features[7] <= 2.5) {
                        classes[0] = 0.017273383961885214; 
                        classes[1] = 0.01280510000171678; 
                    } else {
                        classes[0] = 0.002520577121655717; 
                        classes[1] = 0.003258222758718267; 
                    }
                }
            } else {
                if (features[7] <= 2.5) {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.0074682992884237305; 
                        classes[1] = 0.006890635642085883; 
                    } else {
                        classes[0] = 0.002706326146071576; 
                        classes[1] = 0.003776346693514057; 
                    }
                } else {
                    if (features[4] <= 0.10569429397583008) {
                        classes[0] = 0.0017028125515980083; 
                        classes[1] = 0.001631692169380161; 
                    } else {
                        classes[0] = 0.0017964992295062526; 
                        classes[1] = 0.004182219170329307; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.3012845367193222) {
                if (features[9] <= 0.5) {
                    if (features[8] <= 3.5) {
                        classes[0] = 0.4397417658237335; 
                        classes[1] = 0.03403527023910061; 
                    } else {
                        classes[0] = 0.010670536004301772; 
                        classes[1] = 0.003727731960091791; 
                    }
                } else {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.009390262774584957; 
                        classes[1] = 0.003470103524204569; 
                    } else {
                        classes[0] = 0.0008435939680683143; 
                        classes[1] = 0.0007672531776458552; 
                    }
                }
            } else {
                if (features[3] <= 0.5) {
                    if (features[2] <= 52.5) {
                        classes[0] = 0.1503558021435975; 
                        classes[1] = 0.039672017826939424; 
                    } else {
                        classes[0] = 0.08915357598753301; 
                        classes[1] = 0.01261056709456611; 
                    }
                } else {
                    if (features[1] <= 0.8597841262817383) {
                        classes[0] = 0.046163409203576394; 
                        classes[1] = 0.016439931786089424; 
                    } else {
                        classes[0] = 0.029024676553924496; 
                        classes[1] = 0.019243003031139422; 
                    }
                }
            }
        } else {
            if (features[7] <= 1.5) {
                if (features[1] <= 0.26901014149188995) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.007145850268825388; 
                        classes[1] = 0.002333027136672023; 
                    } else {
                        classes[0] = 0.001441524604786651; 
                        classes[1] = 0.0010228103385933334; 
                    }
                } else {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.02061983235266326; 
                        classes[1] = 0.013823424027930143; 
                    } else {
                        classes[0] = 0.00546768154502705; 
                        classes[1] = 0.006159559568408734; 
                    }
                }
            } else {
                if (features[3] <= 0.5) {
                    if (features[7] <= 2.5) {
                        classes[0] = 0.004837704837886889; 
                        classes[1] = 0.003522235507652698; 
                    } else {
                        classes[0] = 0.0028190255719014244; 
                        classes[1] = 0.003274639173504749; 
                    }
                } else {
                    if (features[4] <= 0.12439052388072014) {
                        classes[0] = 0.0032020076962675195; 
                        classes[1] = 0.0029856807582355543; 
                    } else {
                        classes[0] = 0.006206043878173701; 
                        classes[1] = 0.009829451634240644; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.6987756490707397) {
            if (features[3] <= 0.5) {
                if (features[1] <= 0.15662160515785217) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.3141780295385139; 
                        classes[1] = 0.025723396802410824; 
                    } else {
                        classes[0] = 0.005262246951947112; 
                        classes[1] = 0.0023143951693321923; 
                    }
                } else {
                    if (features[8] <= 3.5) {
                        classes[0] = 0.18958194263733577; 
                        classes[1] = 0.034465441616874065; 
                    } else {
                        classes[0] = 0.005675959526932226; 
                        classes[1] = 0.0029993490757957986; 
                    }
                }
            } else {
                if (features[7] <= 0.5) {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.06374431274565845; 
                        classes[1] = 0.015641068547214757; 
                    } else {
                        classes[0] = 0.022137837310000144; 
                        classes[1] = 0.010320692751209294; 
                    }
                } else {
                    if (features[7] <= 1.5) {
                        classes[0] = 0.006384018851151787; 
                        classes[1] = 0.004329286528888057; 
                    } else {
                        classes[0] = 0.00231079533695082; 
                        classes[1] = 0.0024997082187094987; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[3] <= 0.5) {
                    if (features[2] <= 53.5) {
                        classes[0] = 0.07986758172522132; 
                        classes[1] = 0.028963130588410328; 
                    } else {
                        classes[0] = 0.03667519446541373; 
                        classes[1] = 0.00730483273727467; 
                    }
                } else {
                    if (features[1] <= 1.0041382908821106) {
                        classes[0] = 0.03797922999700569; 
                        classes[1] = 0.021213293397267862; 
                    } else {
                        classes[0] = 0.005386239382784707; 
                        classes[1] = 0.0061629956023309925; 
                    }
                }
            } else {
                if (features[9] <= 0.5) {
                    if (features[1] <= 1.0008464455604553) {
                        classes[0] = 0.020320878264717908; 
                        classes[1] = 0.015500975144628991; 
                    } else {
                        classes[0] = 0.0028168962171490463; 
                        classes[1] = 0.003728249367702938; 
                    }
                } else {
                    if (features[8] <= 0.5) {
                        classes[0] = 0.007789739501950955; 
                        classes[1] = 0.008557802191538665; 
                    } else {
                        classes[0] = 0.0037007442961865004; 
                        classes[1] = 0.006463735511682192; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.673239141702652) {
            if (features[3] <= 0.5) {
                if (features[1] <= 0.1416529417037964) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.2841686347015155; 
                        classes[1] = 0.029332265038301247; 
                    } else {
                        classes[0] = 0.00469566899549645; 
                        classes[1] = 0.002393332294845458; 
                    }
                } else {
                    if (features[2] <= 55.5) {
                        classes[0] = 0.12598910103113145; 
                        classes[1] = 0.0327412954413658; 
                    } else {
                        classes[0] = 0.06778511842565618; 
                        classes[1] = 0.009937308341992739; 
                    }
                }
            } else {
                if (features[7] <= 0.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.07552081464207151; 
                        classes[1] = 0.02307559271012797; 
                    } else {
                        classes[0] = 0.007825826005796439; 
                        classes[1] = 0.005318049560007512; 
                    }
                } else {
                    if (features[2] <= 60.5) {
                        classes[0] = 0.00665224837799411; 
                        classes[1] = 0.0058384204676333075; 
                    } else {
                        classes[0] = 0.002124571566163043; 
                        classes[1] = 0.0011479391303956304; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[9] <= 0.5) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.11571725492524755; 
                        classes[1] = 0.037571031871113485; 
                    } else {
                        classes[0] = 0.0388161717547978; 
                        classes[1] = 0.021835695988529746; 
                    }
                } else {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.01183383709409612; 
                        classes[1] = 0.009512514800593187; 
                    } else {
                        classes[0] = 0.0025606975375543563; 
                        classes[1] = 0.0037981047853885954; 
                    }
                }
            } else {
                if (features[7] <= 2.5) {
                    if (features[1] <= 1.0482730269432068) {
                        classes[0] = 0.027263160672791997; 
                        classes[1] = 0.02248379646604125; 
                    } else {
                        classes[0] = 0.002741438670392116; 
                        classes[1] = 0.004091302747337996; 
                    }
                } else {
                    if (features[4] <= 0.1009497381746769) {
                        classes[0] = 0.0030006724585038805; 
                        classes[1] = 0.002835933121361235; 
                    } else {
                        classes[0] = 0.004088575041835372; 
                        classes[1] = 0.007303625334103207; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.5990689396858215) {
            if (features[3] <= 0.5) {
                if (features[2] <= 54.5) {
                    if (features[8] <= 2.5) {
                        classes[0] = 0.20920169269086297; 
                        classes[1] = 0.04558109423307162; 
                    } else {
                        classes[0] = 0.016279704103684928; 
                        classes[1] = 0.008041579436922653; 
                    }
                } else {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.21061259186156953; 
                        classes[1] = 0.024209440574189896; 
                    } else {
                        classes[0] = 0.0038265005418916392; 
                        classes[1] = 0.001956830174277346; 
                    }
                }
            } else {
                if (features[3] <= 1.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.05614278448865255; 
                        classes[1] = 0.017111583090136183; 
                    } else {
                        classes[0] = 0.005057991236118116; 
                        classes[1] = 0.003454400233995917; 
                    }
                } else {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.019612189568207084; 
                        classes[1] = 0.010763343889595775; 
                    } else {
                        classes[0] = 0.0035299782080334186; 
                        classes[1] = 0.003186753668842409; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[9] <= 0.5) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.13193894272029458; 
                        classes[1] = 0.0460664836844332; 
                    } else {
                        classes[0] = 0.04507632051040605; 
                        classes[1] = 0.026077141871392852; 
                    }
                } else {
                    if (features[4] <= 0.40291526913642883) {
                        classes[0] = 0.008690797931383328; 
                        classes[1] = 0.006217804870042727; 
                    } else {
                        classes[0] = 0.007700628936684999; 
                        classes[1] = 0.008954957532823602; 
                    }
                }
            } else {
                if (features[9] <= 0.5) {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.022479067639216328; 
                        classes[1] = 0.017214926764107446; 
                    } else {
                        classes[0] = 0.0044751364235310455; 
                        classes[1] = 0.005558714093504488; 
                    }
                } else {
                    if (features[8] <= 0.5) {
                        classes[0] = 0.00914470244254737; 
                        classes[1] = 0.00974222217463122; 
                    } else {
                        classes[0] = 0.004640192801422115; 
                        classes[1] = 0.00745350160370935; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.31443046033382416) {
            if (features[9] <= 0.5) {
                if (features[8] <= 2.5) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.3058583539840304; 
                        classes[1] = 0.04839960063876858; 
                    } else {
                        classes[0] = 0.045538667670857846; 
                        classes[1] = 0.015501683372672121; 
                    }
                } else {
                    if (features[4] <= 0.33831703662872314) {
                        classes[0] = 0.004734526083825128; 
                        classes[1] = 0.0006034108739857042; 
                    } else {
                        classes[0] = 0.02192883187900892; 
                        classes[1] = 0.011381932711613602; 
                    }
                }
            } else {
                if (features[4] <= 2313.0) {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.010794512326468133; 
                        classes[1] = 0.007187899680176054; 
                    } else {
                        classes[0] = 0.0013118548593390148; 
                        classes[1] = 0.0017050690348389868; 
                    }
                } else {
                    if (features[4] <= 19811.5) {
                        classes[0] = 0.00060526321065017; 
                        classes[1] = 6.560880243822305e-05; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 2.3897278019692075e-05; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[9] <= 0.5) {
                    if (features[1] <= 1.0010430812835693) {
                        classes[0] = 0.26378818535072496; 
                        classes[1] = 0.10153920244099064; 
                    } else {
                        classes[0] = 0.011494708191115977; 
                        classes[1] = 0.01004532691985782; 
                    }
                } else {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.018738442345188032; 
                        classes[1] = 0.014586619810032227; 
                    } else {
                        classes[0] = 0.003784759682385586; 
                        classes[1] = 0.005190738635080771; 
                    }
                }
            } else {
                if (features[7] <= 2.5) {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.030284487192677113; 
                        classes[1] = 0.024243483613924286; 
                    } else {
                        classes[0] = 0.009219900621285458; 
                        classes[1] = 0.010680829024022401; 
                    }
                } else {
                    if (features[2] <= 23.5) {
                        classes[0] = 0.0006569856927514774; 
                        classes[1] = 0.0002674192817938167; 
                    } else {
                        classes[0] = 0.008182624700101105; 
                        classes[1] = 0.011655174091678298; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.3012845367193222) {
            if (features[9] <= 0.5) {
                if (features[8] <= 2.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.31980074943934217; 
                        classes[1] = 0.06417694201854988; 
                    } else {
                        classes[0] = 0.007967390708636559; 
                        classes[1] = 0.005639040299750238; 
                    }
                } else {
                    if (features[4] <= 0.46618860960006714) {
                        classes[0] = 0.009343716001276044; 
                        classes[1] = 0.002615830671624791; 
                    } else {
                        classes[0] = 0.01651035239433805; 
                        classes[1] = 0.010058708280253369; 
                    }
                }
            } else {
                if (features[4] <= 59.0) {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.009308576184369912; 
                        classes[1] = 0.006812997390971293; 
                    } else {
                        classes[0] = 0.0011164592732283247; 
                        classes[1] = 0.001541108937161481; 
                    }
                } else {
                    if (features[3] <= 1.5) {
                        classes[0] = 0.001694450931923892; 
                        classes[1] = 0.00039162590767912033; 
                    } else {
                        classes[0] = 0.00040420632887208186; 
                        classes[1] = 0.0004136563195351774; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[3] <= 1.5) {
                    if (features[2] <= 55.5) {
                        classes[0] = 0.19513894972699572; 
                        classes[1] = 0.09530702450920801; 
                    } else {
                        classes[0] = 0.07771513409932537; 
                        classes[1] = 0.02365534918936334; 
                    }
                } else {
                    if (features[4] <= 0.4860619455575943) {
                        classes[0] = 0.015333508235381115; 
                        classes[1] = 0.010636701388793472; 
                    } else {
                        classes[0] = 0.012261216295720986; 
                        classes[1] = 0.013580680511589713; 
                    }
                }
            } else {
                if (features[9] <= 1.5) {
                    if (features[1] <= 1.0008464455604553) {
                        classes[0] = 0.038935590352430244; 
                        classes[1] = 0.03312533251237112; 
                    } else {
                        classes[0] = 0.0050050271938658405; 
                        classes[1] = 0.006713230622848511; 
                    }
                } else {
                    if (features[4] <= 0.4101242572069168) {
                        classes[0] = 0.004096924440071257; 
                        classes[1] = 0.0044153509474789574; 
                    } else {
                        classes[0] = 0.0019296642806684936; 
                        classes[1] = 0.004354504606424305; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.6989775598049164) {
            if (features[3] <= 0.5) {
                if (features[2] <= 59.5) {
                    if (features[8] <= 4.5) {
                        classes[0] = 0.26170367753346285; 
                        classes[1] = 0.08797041524919233; 
                    } else {
                        classes[0] = 0.0028794177372430856; 
                        classes[1] = 0.003815329515882401; 
                    }
                } else {
                    if (features[6] <= 13.5) {
                        classes[0] = 0.11813174725229454; 
                        classes[1] = 0.018052798497712078; 
                    } else {
                        classes[0] = 0.024849772798587227; 
                        classes[1] = 0.007903606010061702; 
                    }
                }
            } else {
                if (features[3] <= 1.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.05843175956340092; 
                        classes[1] = 0.02519077573115116; 
                    } else {
                        classes[0] = 0.00520065770824213; 
                        classes[1] = 0.004314665726549226; 
                    }
                } else {
                    if (features[3] <= 2.5) {
                        classes[0] = 0.017700919385174315; 
                        classes[1] = 0.011277437981109324; 
                    } else {
                        classes[0] = 0.009166247181560706; 
                        classes[1] = 0.00856836630270617; 
                    }
                }
            }
        } else {
            if (features[3] <= 0.5) {
                if (features[2] <= 62.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.09548998690660848; 
                        classes[1] = 0.052108037918887774; 
                    } else {
                        classes[0] = 0.01884827678047217; 
                        classes[1] = 0.016343753918151904; 
                    }
                } else {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.01648606664557257; 
                        classes[1] = 0.004100095572240645; 
                    } else {
                        classes[0] = 0.0008416394918801737; 
                        classes[1] = 0.0007515927661411691; 
                    }
                }
            } else {
                if (features[1] <= 1.009725570678711) {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.053059851393454725; 
                        classes[1] = 0.04140430189294511; 
                    } else {
                        classes[0] = 0.0053309381063822115; 
                        classes[1] = 0.007505032787642686; 
                    }
                } else {
                    if (features[0] <= 133674.0) {
                        classes[0] = 0.00868536501303634; 
                        classes[1] = 0.011208328683837076; 
                    } else {
                        classes[0] = 0.0006370898013811197; 
                        classes[1] = 0.0020420481471327724; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.231756292283535) {
            if (features[9] <= 0.5) {
                if (features[2] <= 46.5) {
                    if (features[6] <= 13.5) {
                        classes[0] = 0.07759880186458427; 
                        classes[1] = 0.028233095245156735; 
                    } else {
                        classes[0] = 0.008617561659855479; 
                        classes[1] = 0.006781857465213553; 
                    }
                } else {
                    if (features[6] <= 6.5) {
                        classes[0] = 0.07140459112777016; 
                        classes[1] = 0.009891875178162264; 
                    } else {
                        classes[0] = 0.13742514089306077; 
                        classes[1] = 0.03988648706530759; 
                    }
                }
            } else {
                if (features[4] <= 2315.5) {
                    if (features[8] <= 2.5) {
                        classes[0] = 0.009593893682497774; 
                        classes[1] = 0.008001031925875748; 
                    } else {
                        classes[0] = 0.0006442253206546229; 
                        classes[1] = 0.0010816765327972741; 
                    }
                } else {
                    if (features[7] <= 2.0) {
                        classes[0] = 0.0004429520178919; 
                        classes[1] = 4.195163172629214e-05; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 2.085955293694868e-05; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[9] <= 0.5) {
                    if (features[2] <= 55.5) {
                        classes[0] = 0.21144096686295022; 
                        classes[1] = 0.11837753707055323; 
                    } else {
                        classes[0] = 0.08461684183086657; 
                        classes[1] = 0.03172981838859978; 
                    }
                } else {
                    if (features[1] <= 0.8808233737945557) {
                        classes[0] = 0.013952872622727782; 
                        classes[1] = 0.010755678247153512; 
                    } else {
                        classes[0] = 0.010664159630916293; 
                        classes[1] = 0.012836853659206032; 
                    }
                }
            } else {
                if (features[7] <= 1.5) {
                    if (features[4] <= 2464.0) {
                        classes[0] = 0.031263836018038636; 
                        classes[1] = 0.02841444123482968; 
                    } else {
                        classes[0] = 0.0013912145741979546; 
                        classes[1] = 0.00038435987261203897; 
                    }
                } else {
                    if (features[4] <= 0.10261600092053413) {
                        classes[0] = 0.0063643615861140885; 
                        classes[1] = 0.005499039245922489; 
                    } else {
                        classes[0] = 0.014124787607456196; 
                        classes[1] = 0.01851723038436823; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.22758375108242035) {
            if (features[3] <= 0.5) {
                if (features[6] <= 10.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.17273184460391208; 
                        classes[1] = 0.041559774995541685; 
                    } else {
                        classes[0] = 0.0035419730686545494; 
                        classes[1] = 0.0033924709002945397; 
                    }
                } else {
                    if (features[2] <= 43.5) {
                        classes[0] = 0.011518291116616309; 
                        classes[1] = 0.008408178724177285; 
                    } else {
                        classes[0] = 0.05943690234895425; 
                        classes[1] = 0.021993336224563457; 
                    }
                }
            } else {
                if (features[3] <= 1.5) {
                    if (features[0] <= 135921.0) {
                        classes[0] = 0.02944052570559337; 
                        classes[1] = 0.013086210193543845; 
                    } else {
                        classes[0] = 0.002886875108329255; 
                        classes[1] = 0.0024496889638315027; 
                    }
                } else {
                    if (features[5] <= 5428.5) {
                        classes[0] = 0.0040299169696863925; 
                        classes[1] = 0.004843826637545759; 
                    } else {
                        classes[0] = 0.006769828431172752; 
                        classes[1] = 0.004351887851301482; 
                    }
                }
            }
        } else {
            if (features[9] <= 0.5) {
                if (features[3] <= 0.5) {
                    if (features[2] <= 58.5) {
                        classes[0] = 0.18956568526533946; 
                        classes[1] = 0.10629489570970921; 
                    } else {
                        classes[0] = 0.05302003412793176; 
                        classes[1] = 0.01896653123842874; 
                    }
                } else {
                    if (features[3] <= 2.5) {
                        classes[0] = 0.07617067639214434; 
                        classes[1] = 0.05409857820239898; 
                    } else {
                        classes[0] = 0.010681158328351904; 
                        classes[1] = 0.012243782729456287; 
                    }
                }
            } else {
                if (features[9] <= 1.5) {
                    if (features[1] <= 0.8618655800819397) {
                        classes[0] = 0.015074622219149998; 
                        classes[1] = 0.011697873441832037; 
                    } else {
                        classes[0] = 0.017054703655672198; 
                        classes[1] = 0.01856258118966663; 
                    }
                } else {
                    if (features[4] <= 0.1281353235244751) {
                        classes[0] = 0.003270849891330064; 
                        classes[1] = 0.003087462993065588; 
                    } else {
                        classes[0] = 0.007719308858368329; 
                        classes[1] = 0.01204972391352965; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.13754335045814514) {
            if (features[7] <= 0.5) {
                if (features[8] <= 2.5) {
                    if (features[2] <= 57.5) {
                        classes[0] = 0.11109488500607353; 
                        classes[1] = 0.04305709796429393; 
                    } else {
                        classes[0] = 0.09736692995941755; 
                        classes[1] = 0.02182344284992379; 
                    }
                } else {
                    if (features[4] <= 0.37045831978321075) {
                        classes[0] = 0.0036107550659626596; 
                        classes[1] = 0.0010316410259130098; 
                    } else {
                        classes[0] = 0.012733453030104085; 
                        classes[1] = 0.01014346973363082; 
                    }
                }
            } else {
                if (features[7] <= 1.5) {
                    if (features[1] <= 0.09519911929965019) {
                        classes[0] = 0.0048996317295471915; 
                        classes[1] = 0.00468563791270663; 
                    } else {
                        classes[0] = 0.0009880292962599357; 
                        classes[1] = 0.00038594367892268795; 
                    }
                } else {
                    if (features[4] <= 0.0012924940092489123) {
                        classes[0] = 9.040464540292126e-05; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 0.0010764354670113753; 
                        classes[1] = 0.0019852039995453628; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[3] <= 1.5) {
                    if (features[1] <= 0.8305147290229797) {
                        classes[0] = 0.22320465197750755; 
                        classes[1] = 0.11022929124930513; 
                    } else {
                        classes[0] = 0.10358586070552865; 
                        classes[1] = 0.07092440196186377; 
                    }
                } else {
                    if (features[4] <= 0.4825301766395569) {
                        classes[0] = 0.01803579525819539; 
                        classes[1] = 0.013955239380395768; 
                    } else {
                        classes[0] = 0.014786959416214824; 
                        classes[1] = 0.017134738280041334; 
                    }
                }
            } else {
                if (features[7] <= 2.5) {
                    if (features[4] <= 2669.0) {
                        classes[0] = 0.0444448811273744; 
                        classes[1] = 0.0430462042169407; 
                    } else {
                        classes[0] = 0.0014136778557533476; 
                        classes[1] = 0.0005540697827371414; 
                    }
                } else {
                    if (features[2] <= 23.5) {
                        classes[0] = 0.0007147817599419827; 
                        classes[1] = 0.00031133311905586544; 
                    } else {
                        classes[0] = 0.009586021194495304; 
                        classes[1] = 0.013099131349964281; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.13754335045814514) {
            if (features[9] <= 0.5) {
                if (features[8] <= 2.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.19326915907826442; 
                        classes[1] = 0.06424995053618598; 
                    } else {
                        classes[0] = 0.005121398064233613; 
                        classes[1] = 0.004905246341833653; 
                    }
                } else {
                    if (features[4] <= 0.4659564644098282) {
                        classes[0] = 0.00568531754548721; 
                        classes[1] = 0.0021757842358235946; 
                    } else {
                        classes[0] = 0.010289001090662895; 
                        classes[1] = 0.008944483393161404; 
                    }
                }
            } else {
                if (features[0] <= 92589.0) {
                    if (features[9] <= 2.5) {
                        classes[0] = 0.0045854819141469645; 
                        classes[1] = 0.005326613785702287; 
                    } else {
                        classes[0] = 8.265074892449012e-05; 
                        classes[1] = 0.00034787866141238995; 
                    }
                } else {
                    if (features[4] <= 227.5) {
                        classes[0] = 0.0026102475806981146; 
                        classes[1] = 0.002172314730069098; 
                    } else {
                        classes[0] = 0.0005363041048335791; 
                        classes[1] = 9.268117252181518e-05; 
                    }
                }
            }
        } else {
            if (features[9] <= 0.5) {
                if (features[3] <= 0.5) {
                    if (features[2] <= 53.5) {
                        classes[0] = 0.1799775835164731; 
                        classes[1] = 0.11356651307665123; 
                    } else {
                        classes[0] = 0.09030728205454441; 
                        classes[1] = 0.03960742349870413; 
                    }
                } else {
                    if (features[1] <= 1.009725570678711) {
                        classes[0] = 0.08856580697347889; 
                        classes[1] = 0.06735255205219548; 
                    } else {
                        classes[0] = 0.006311134130397423; 
                        classes[1] = 0.008423216173201896; 
                    }
                }
            } else {
                if (features[4] <= 0.6622037887573242) {
                    if (features[9] <= 1.5) {
                        classes[0] = 0.025143899098152244; 
                        classes[1] = 0.021981759138323474; 
                    } else {
                        classes[0] = 0.00856769712135703; 
                        classes[1] = 0.01046787986499627; 
                    }
                } else {
                    if (features[5] <= 899.0) {
                        classes[0] = 0.000999099341380636; 
                        classes[1] = 0.00041744841466278204; 
                    } else {
                        classes[0] = 0.011525752687565621; 
                        classes[1] = 0.016390439873986848; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.7734005749225616) {
            if (features[3] <= 0.5) {
                if (features[6] <= 8.5) {
                    if (features[2] <= 54.5) {
                        classes[0] = 0.11445571397362693; 
                        classes[1] = 0.05314828564819715; 
                    } else {
                        classes[0] = 0.07768281411985532; 
                        classes[1] = 0.02014409041112093; 
                    }
                } else {
                    if (features[4] <= 0.4301162511110306) {
                        classes[0] = 0.08212870766713885; 
                        classes[1] = 0.038303175310710605; 
                    } else {
                        classes[0] = 0.08240740986547297; 
                        classes[1] = 0.056477899636866793; 
                    }
                }
            } else {
                if (features[3] <= 2.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.07260481539170088; 
                        classes[1] = 0.04688535765386613; 
                    } else {
                        classes[0] = 0.008899651620797965; 
                        classes[1] = 0.008674125849275979; 
                    }
                } else {
                    if (features[4] <= 0.6107728481292725) {
                        classes[0] = 0.007202319595006308; 
                        classes[1] = 0.006651665030143215; 
                    } else {
                        classes[0] = 0.003399666394830662; 
                        classes[1] = 0.004809846133971991; 
                    }
                }
            }
        } else {
            if (features[1] <= 1.0010430812835693) {
                if (features[3] <= 1.5) {
                    if (features[2] <= 63.5) {
                        classes[0] = 0.11612467663226808; 
                        classes[1] = 0.08913445574469933; 
                    } else {
                        classes[0] = 0.013580132273721244; 
                        classes[1] = 0.00550532281729606; 
                    }
                } else {
                    if (features[4] <= 0.5036571621894836) {
                        classes[0] = 0.012596289493581185; 
                        classes[1] = 0.011694880839107118; 
                    } else {
                        classes[0] = 0.008472419312525048; 
                        classes[1] = 0.011240139005517376; 
                    }
                }
            } else {
                if (features[1] <= 2.05238938331604) {
                    if (features[6] <= 9.5) {
                        classes[0] = 0.015988668601338955; 
                        classes[1] = 0.01989058220108311; 
                    } else {
                        classes[0] = 0.0026831655478182104; 
                        classes[1] = 0.005709080903657166; 
                    }
                } else {
                    if (features[5] <= 6112.5) {
                        classes[0] = 0.0008397112780558026; 
                        classes[1] = 0.0007429067405670609; 
                    } else {
                        classes[0] = 0.0017274100462031686; 
                        classes[1] = 0.0001946142599957981; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.11458282172679901) {
            if (features[7] <= 0.5) {
                if (features[2] <= 34.5) {
                    if (features[10] <= 0.5) {
                        classes[0] = 0.012234456158167118; 
                        classes[1] = 0.0078014218695471975; 
                    } else {
                        classes[0] = 0.003694889009617228; 
                        classes[1] = 0.00457944352689917; 
                    }
                } else {
                    if (features[6] <= 13.5) {
                        classes[0] = 0.1437878467604068; 
                        classes[1] = 0.05223139652670885; 
                    } else {
                        classes[0] = 0.028246656805008145; 
                        classes[1] = 0.017401711583506525; 
                    }
                }
            } else {
                if (features[7] <= 1.5) {
                    if (features[4] <= 441.5) {
                        classes[0] = 0.004495614419066122; 
                        classes[1] = 0.004808444418781315; 
                    } else {
                        classes[0] = 0.0008483866936071534; 
                        classes[1] = 0.0003637034450032787; 
                    }
                } else {
                    if (features[2] <= 50.5) {
                        classes[0] = 0.0005652095608592933; 
                        classes[1] = 0.0014320975294589895; 
                    } else {
                        classes[0] = 0.0005215348389018297; 
                        classes[1] = 0.0005246295479922525; 
                    }
                }
            }
        } else {
            if (features[7] <= 0.5) {
                if (features[8] <= 3.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.3203945693958784; 
                        classes[1] = 0.20021281725267784; 
                    } else {
                        classes[0] = 0.027248650710573127; 
                        classes[1] = 0.027534500643700294; 
                    }
                } else {
                    if (features[4] <= 1.0836857557296753) {
                        classes[0] = 0.007124283420941909; 
                        classes[1] = 0.007620708455100159; 
                    } else {
                        classes[0] = 0.002571685547024234; 
                        classes[1] = 0.006166789919230995; 
                    }
                }
            } else {
                if (features[7] <= 2.5) {
                    if (features[4] <= 2669.0) {
                        classes[0] = 0.04532354399368469; 
                        classes[1] = 0.04583225078489508; 
                    } else {
                        classes[0] = 0.0013729806301932008; 
                        classes[1] = 0.0005987776543170181; 
                    }
                } else {
                    if (features[2] <= 23.5) {
                        classes[0] = 0.00071364792075371; 
                        classes[1] = 0.00033358321609921175; 
                    } else {
                        classes[0] = 0.009955867164730611; 
                        classes[1] = 0.0134579005967915; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.7734005749225616) {
            if (features[2] <= 59.5) {
                if (features[6] <= 13.5) {
                    if (features[9] <= 0.5) {
                        classes[0] = 0.2332988204205296; 
                        classes[1] = 0.13339781460198352; 
                    } else {
                        classes[0] = 0.0160550369472505; 
                        classes[1] = 0.016915481543446315; 
                    }
                } else {
                    if (features[4] <= 0.5647917985916138) {
                        classes[0] = 0.030018554361442285; 
                        classes[1] = 0.022326571086071563; 
                    } else {
                        classes[0] = 0.01930373402896349; 
                        classes[1] = 0.02187619341591261; 
                    }
                }
            } else {
                if (features[3] <= 0.5) {
                    if (features[6] <= 6.5) {
                        classes[0] = 0.03622019336776005; 
                        classes[1] = 0.00995204633955477; 
                    } else {
                        classes[0] = 0.07083256143023353; 
                        classes[1] = 0.032873388716493424; 
                    }
                } else {
                    if (features[2] <= 81.5) {
                        classes[0] = 0.02107149766748388; 
                        classes[1] = 0.013024114603225608; 
                    } else {
                        classes[0] = 0.0012422479120923746; 
                        classes[1] = 0.0017712247915367568; 
                    }
                }
            }
        } else {
            if (features[1] <= 1.0010430812835693) {
                if (features[6] <= 12.5) {
                    if (features[2] <= 62.5) {
                        classes[0] = 0.12183248275620867; 
                        classes[1] = 0.1001003750391528; 
                    } else {
                        classes[0] = 0.014693699231967838; 
                        classes[1] = 0.006934424825483038; 
                    }
                } else {
                    if (features[4] <= 0.4884297698736191) {
                        classes[0] = 0.004769238809773497; 
                        classes[1] = 0.003753339155061541; 
                    } else {
                        classes[0] = 0.007722477024855488; 
                        classes[1] = 0.011706408753055477; 
                    }
                }
            } else {
                if (features[1] <= 2.05238938331604) {
                    if (features[6] <= 9.5) {
                        classes[0] = 0.01628642471884878; 
                        classes[1] = 0.02020913471375882; 
                    } else {
                        classes[0] = 0.002794669339405822; 
                        classes[1] = 0.00564709740826064; 
                    }
                } else {
                    if (features[5] <= 4900.0) {
                        classes[0] = 0.0005944977518704447; 
                        classes[1] = 0.000651906893208603; 
                    } else {
                        classes[0] = 0.0017899439801340857; 
                        classes[1] = 0.00033439836492740407; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[2] <= 57.5) {
                if (features[4] <= 0.42318199574947357) {
                    if (features[8] <= 0.5) {
                        classes[0] = 0.10118600634546543; 
                        classes[1] = 0.07532708975894792; 
                    } else {
                        classes[0] = 0.0972199591593781; 
                        classes[1] = 0.04838321765500371; 
                    }
                } else {
                    if (features[6] <= 9.5) {
                        classes[0] = 0.093460878143383; 
                        classes[1] = 0.06498869852982517; 
                    } else {
                        classes[0] = 0.0692997826513753; 
                        classes[1] = 0.07257221940930342; 
                    }
                }
            } else {
                if (features[5] <= 6666.5) {
                    if (features[2] <= 65.5) {
                        classes[0] = 0.03537746381096445; 
                        classes[1] = 0.026634785063599013; 
                    } else {
                        classes[0] = 0.03963770281970043; 
                        classes[1] = 0.019084556654662622; 
                    }
                } else {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.07255345614750405; 
                        classes[1] = 0.02530886314174043; 
                    } else {
                        classes[0] = 0.016118833999743433; 
                        classes[1] = 0.009975139918200501; 
                    }
                }
            }
        } else {
            if (features[7] <= 1.5) {
                if (features[4] <= 1946.5) {
                    if (features[4] <= 0.3699193447828293) {
                        classes[0] = 0.02269254244805144; 
                        classes[1] = 0.020296636130247906; 
                    } else {
                        classes[0] = 0.01575392045187768; 
                        classes[1] = 0.01880866323567304; 
                    }
                } else {
                    if (features[0] <= 143087.5) {
                        classes[0] = 0.0020357772320463196; 
                        classes[1] = 0.0007533175000564911; 
                    } else {
                        classes[0] = 8.91167722338558e-05; 
                        classes[1] = 0.0002259939545910885; 
                    }
                }
            } else {
                if (features[4] <= 0.0011009315494447947) {
                    if (features[2] <= 52.5) {
                        classes[0] = 0.002879860809588384; 
                        classes[1] = 0.0019084348873441227; 
                    } else {
                        classes[0] = 0.00014867416794038014; 
                        classes[1] = 0.0005100601912775874; 
                    }
                } else {
                    if (features[0] <= 20841.5) {
                        classes[0] = 0.0035420111339141648; 
                        classes[1] = 0.0033232902540816086; 
                    } else {
                        classes[0] = 0.016905533291259874; 
                        classes[1] = 0.022997514331016072; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[3] <= 0.5) {
            if (features[1] <= 0.11458282172679901) {
                if (features[2] <= 34.5) {
                    if (features[10] <= 0.5) {
                        classes[0] = 0.010523542877185385; 
                        classes[1] = 0.007149039421735331; 
                    } else {
                        classes[0] = 0.0031655172699309657; 
                        classes[1] = 0.004497022935454874; 
                    }
                } else {
                    if (features[8] <= 1.5) {
                        classes[0] = 0.1007499963243704; 
                        classes[1] = 0.04105755078547157; 
                    } else {
                        classes[0] = 0.03812525431990766; 
                        classes[1] = 0.024675108422937318; 
                    }
                }
            } else {
                if (features[8] <= 3.5) {
                    if (features[5] <= 5559.5) {
                        classes[0] = 0.1277044363515612; 
                        classes[1] = 0.10540256501457937; 
                    } else {
                        classes[0] = 0.14279293242900837; 
                        classes[1] = 0.08693300645801676; 
                    }
                } else {
                    if (features[4] <= 0.6805424392223358) {
                        classes[0] = 0.003502710234277828; 
                        classes[1] = 0.0034926910928587173; 
                    } else {
                        classes[0] = 0.00338030718387138; 
                        classes[1] = 0.0065417458460337915; 
                    }
                }
            }
        } else {
            if (features[3] <= 2.5) {
                if (features[9] <= 1.5) {
                    if (features[2] <= 55.5) {
                        classes[0] = 0.08530598259200947; 
                        classes[1] = 0.07748413549718362; 
                    } else {
                        classes[0] = 0.03631782706131048; 
                        classes[1] = 0.025887638010369928; 
                    }
                } else {
                    if (features[0] <= 9317.5) {
                        classes[0] = 0.000556547973424796; 
                        classes[1] = 0.00020198638648674785; 
                    } else {
                        classes[0] = 0.004327181490024383; 
                        classes[1] = 0.006965357879820373; 
                    }
                }
            } else {
                if (features[5] <= 6618.0) {
                    if (features[0] <= 15134.5) {
                        classes[0] = 0.0016246850868784322; 
                        classes[1] = 0.0012739119626086768; 
                    } else {
                        classes[0] = 0.010555161271969083; 
                        classes[1] = 0.015958266650831856; 
                    }
                } else {
                    if (features[2] <= 22.5) {
                        classes[0] = 0.00038132812476716855; 
                        classes[1] = 5.687866040152082e-05; 
                    } else {
                        classes[0] = 0.01114684517428943; 
                        classes[1] = 0.012262839210406173; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.7734005749225616) {
            if (features[9] <= 0.5) {
                if (features[6] <= 8.5) {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.1821243245209813; 
                        classes[1] = 0.09466565465862806; 
                    } else {
                        classes[0] = 0.008685594775223128; 
                        classes[1] = 0.009621302020012056; 
                    }
                } else {
                    if (features[8] <= 4.5) {
                        classes[0] = 0.18428744544956857; 
                        classes[1] = 0.13357259262417343; 
                    } else {
                        classes[0] = 0.0051657153235957105; 
                        classes[1] = 0.007964462848735171; 
                    }
                }
            } else {
                if (features[6] <= 6.5) {
                    if (features[3] <= 3.5) {
                        classes[0] = 0.00745853779531873; 
                        classes[1] = 0.009689438416276525; 
                    } else {
                        classes[0] = 5.796469375984638e-05; 
                        classes[1] = 0.00043915190462220086; 
                    }
                } else {
                    if (features[5] <= 5284.0) {
                        classes[0] = 0.006183377159462878; 
                        classes[1] = 0.007330523099630438; 
                    } else {
                        classes[0] = 0.010712967995803; 
                        classes[1] = 0.008877178353104524; 
                    }
                }
            }
        } else {
            if (features[1] <= 1.0010430812835693) {
                if (features[6] <= 8.5) {
                    if (features[2] <= 68.5) {
                        classes[0] = 0.10576100495285427; 
                        classes[1] = 0.08906208151455432; 
                    } else {
                        classes[0] = 0.005830122672802274; 
                        classes[1] = 0.0021029096472431987; 
                    }
                } else {
                    if (features[4] <= 0.5036200284957886) {
                        classes[0] = 0.015478769549479476; 
                        classes[1] = 0.012954740854859537; 
                    } else {
                        classes[0] = 0.018952189515020746; 
                        classes[1] = 0.02416836605764456; 
                    }
                }
            } else {
                if (features[1] <= 2.05238938331604) {
                    if (features[0] <= 144928.5) {
                        classes[0] = 0.01897959415770012; 
                        classes[1] = 0.0247720997282727; 
                    } else {
                        classes[0] = 0.0003932245982045701; 
                        classes[1] = 0.0014657192934880374; 
                    }
                } else {
                    if (features[5] <= 6112.5) {
                        classes[0] = 0.0008198774252108288; 
                        classes[1] = 0.0007972129841372817; 
                    } else {
                        classes[0] = 0.0013804056300784659; 
                        classes[1] = 0.0002454497795695016; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[3] <= 0.5) {
            if (features[2] <= 59.5) {
                if (features[8] <= 4.5) {
                    if (features[5] <= 6584.5) {
                        classes[0] = 0.1628871965006312; 
                        classes[1] = 0.13770981914661942; 
                    } else {
                        classes[0] = 0.13822760502855252; 
                        classes[1] = 0.08823570986637094; 
                    }
                } else {
                    if (features[4] <= 4.644721746444702) {
                        classes[0] = 0.002744119343843483; 
                        classes[1] = 0.005984391944877395; 
                    } else {
                        classes[0] = 0.0005163170215568798; 
                        classes[1] = 0.0003706275260451128; 
                    }
                }
            } else {
                if (features[5] <= 3749.5) {
                    if (features[6] <= 7.5) {
                        classes[0] = 0.01348043125904451; 
                        classes[1] = 0.00745452224675211; 
                    } else {
                        classes[0] = 0.010868866575283158; 
                        classes[1] = 0.01091295787566836; 
                    }
                } else {
                    if (features[6] <= 14.5) {
                        classes[0] = 0.07325671183927945; 
                        classes[1] = 0.03071649159480011; 
                    } else {
                        classes[0] = 0.013908792496732023; 
                        classes[1] = 0.010699749243487775; 
                    }
                }
            }
        } else {
            if (features[3] <= 1.5) {
                if (features[1] <= 0.8820598125457764) {
                    if (features[5] <= 7505.0) {
                        classes[0] = 0.047869376345310695; 
                        classes[1] = 0.04082486679107084; 
                    } else {
                        classes[0] = 0.017607880213359184; 
                        classes[1] = 0.011182000913800165; 
                    }
                } else {
                    if (features[4] <= 0.019898786209523678) {
                        classes[0] = 0.0017425730564700093; 
                        classes[1] = 0.0009099020104367777; 
                    } else {
                        classes[0] = 0.02601655428593621; 
                        classes[1] = 0.027819751903970725; 
                    }
                }
            } else {
                if (features[4] <= 0.4825301766395569) {
                    if (features[5] <= 12375.0) {
                        classes[0] = 0.02867152158275879; 
                        classes[1] = 0.02955741911487295; 
                    } else {
                        classes[0] = 0.003166242889772456; 
                        classes[1] = 0.0017254463981882088; 
                    }
                } else {
                    if (features[5] <= 1134.5) {
                        classes[0] = 0.00138115063291048; 
                        classes[1] = 0.000634508964352062; 
                    } else {
                        classes[0] = 0.02281535451021077; 
                        classes[1] = 0.030101140877025066; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[1] <= 0.11458282172679901) {
                if (features[5] <= 3498.5) {
                    if (features[6] <= 7.5) {
                        classes[0] = 0.016503632624083303; 
                        classes[1] = 0.010780898459400029; 
                    } else {
                        classes[0] = 0.01291098935558572; 
                        classes[1] = 0.01411444714058909; 
                    }
                } else {
                    if (features[8] <= 2.5) {
                        classes[0] = 0.12009834715897888; 
                        classes[1] = 0.06195914502728563; 
                    } else {
                        classes[0] = 0.012493311163701261; 
                        classes[1] = 0.011938457158615391; 
                    }
                }
            } else {
                if (features[4] <= 0.5085816383361816) {
                    if (features[5] <= 5510.5) {
                        classes[0] = 0.09565635448899418; 
                        classes[1] = 0.08176348207987308; 
                    } else {
                        classes[0] = 0.10540327975608203; 
                        classes[1] = 0.06691591749675109; 
                    }
                } else {
                    if (features[4] <= 824.5) {
                        classes[0] = 0.09490004606546591; 
                        classes[1] = 0.09936066832725306; 
                    } else {
                        classes[0] = 0.03669430842964213; 
                        classes[1] = 0.023518996969696858; 
                    }
                }
            }
        } else {
            if (features[4] <= 0.12271276861429214) {
                if (features[10] <= 1.5) {
                    if (features[4] <= 0.1196901835501194) {
                        classes[0] = 0.012980216065526406; 
                        classes[1] = 0.011556193984960312; 
                    } else {
                        classes[0] = 0.0003849015386636832; 
                        classes[1] = 0.0001012020127873957; 
                    }
                } else {
                    if (features[4] <= 0.019360308535397053) {
                        classes[0] = 0.001721363160683347; 
                        classes[1] = 0.0014392186484366186; 
                    } else {
                        classes[0] = 0.002479479618501282; 
                        classes[1] = 0.0036648042925540784; 
                    }
                }
            } else {
                if (features[7] <= 3.5) {
                    if (features[4] <= 2564.0) {
                        classes[0] = 0.04161791147923719; 
                        classes[1] = 0.04754643193027986; 
                    } else {
                        classes[0] = 0.0017320335484612675; 
                        classes[1] = 0.0010578683659538232; 
                    }
                } else {
                    if (features[5] <= 1512.5) {
                        classes[0] = 0.0003122683981700351; 
                        classes[1] = 0.00017779104276436443; 
                    } else {
                        classes[0] = 0.0028150286555979525; 
                        classes[1] = 0.005401005555449306; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[9] <= 0.5) {
            if (features[2] <= 57.5) {
                if (features[6] <= 13.5) {
                    if (features[1] <= 0.8704195022583008) {
                        classes[0] = 0.21736569588750912; 
                        classes[1] = 0.15831090984214877; 
                    } else {
                        classes[0] = 0.08642239085771765; 
                        classes[1] = 0.08298834521863646; 
                    }
                } else {
                    if (features[4] <= 0.6789253652095795) {
                        classes[0] = 0.03150534790797438; 
                        classes[1] = 0.030028828154991107; 
                    } else {
                        classes[0] = 0.014829598256644197; 
                        classes[1] = 0.020977835066887714; 
                    }
                }
            } else {
                if (features[5] <= 6666.5) {
                    if (features[2] <= 63.5) {
                        classes[0] = 0.02697746961320328; 
                        classes[1] = 0.024162970443263918; 
                    } else {
                        classes[0] = 0.043082824685859826; 
                        classes[1] = 0.026197993322387543; 
                    }
                } else {
                    if (features[6] <= 14.5) {
                        classes[0] = 0.06303130164489869; 
                        classes[1] = 0.030332872028483664; 
                    } else {
                        classes[0] = 0.015352201634641436; 
                        classes[1] = 0.01157685485263748; 
                    }
                }
            }
        } else {
            if (features[5] <= 899.0) {
                if (features[0] <= 81753.5) {
                    if (features[0] <= 79701.0) {
                        classes[0] = 0.00081716283070297; 
                        classes[1] = 0.0006148577718977492; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 0.00011866737048774103; 
                    }
                } else {
                    if (features[2] <= 32.5) {
                        classes[0] = 0.00035540582589642004; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 0.0003863244251788535; 
                        classes[1] = 0.00016735531965998048; 
                    }
                }
            } else {
                if (features[4] <= 0.6646689176559448) {
                    if (features[1] <= 0.14526984840631485) {
                        classes[0] = 0.005512724467115752; 
                        classes[1] = 0.007944730907171235; 
                    } else {
                        classes[0] = 0.03346274428427376; 
                        classes[1] = 0.03458195410143609; 
                    }
                } else {
                    if (features[0] <= 123620.5) {
                        classes[0] = 0.011747391017047016; 
                        classes[1] = 0.014962824877912416; 
                    } else {
                        classes[0] = 0.002032006031044545; 
                        classes[1] = 0.0041524113522893496; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[3] <= 0.5) {
            if (features[2] <= 48.5) {
                if (features[6] <= 15.5) {
                    if (features[1] <= 0.8487764298915863) {
                        classes[0] = 0.1266663794980627; 
                        classes[1] = 0.09671145666380468; 
                    } else {
                        classes[0] = 0.05550265147949145; 
                        classes[1] = 0.055077443983967446; 
                    }
                } else {
                    if (features[1] <= 0.036849236115813255) {
                        classes[0] = 0.001513960587680031; 
                        classes[1] = 0.0009112246546148542; 
                    } else {
                        classes[0] = 0.008121626904732168; 
                        classes[1] = 0.012972116953055531; 
                    }
                }
            } else {
                if (features[5] <= 6666.5) {
                    if (features[6] <= 12.5) {
                        classes[0] = 0.0769506746659673; 
                        classes[1] = 0.0554072341346502; 
                    } else {
                        classes[0] = 0.019011666524050702; 
                        classes[1] = 0.02091219957017603; 
                    }
                } else {
                    if (features[7] <= 0.5) {
                        classes[0] = 0.10694911260588742; 
                        classes[1] = 0.05829317537262928; 
                    } else {
                        classes[0] = 0.005365998518619619; 
                        classes[1] = 0.00594504611991433; 
                    }
                }
            }
        } else {
            if (features[3] <= 2.5) {
                if (features[9] <= 1.5) {
                    if (features[4] <= 0.7342306673526764) {
                        classes[0] = 0.08873289633945944; 
                        classes[1] = 0.07744374307383652; 
                    } else {
                        classes[0] = 0.02964486811236854; 
                        classes[1] = 0.03185948046882635; 
                    }
                } else {
                    if (features[0] <= 9317.5) {
                        classes[0] = 0.0005455332255449892; 
                        classes[1] = 0.0002162940091969493; 
                    } else {
                        classes[0] = 0.004527403850754209; 
                        classes[1] = 0.0068721124784406964; 
                    }
                }
            } else {
                if (features[1] <= 1.0363723635673523) {
                    if (features[0] <= 21907.0) {
                        classes[0] = 0.003553348283009548; 
                        classes[1] = 0.0030328304054140945; 
                    } else {
                        classes[0] = 0.01877126500979887; 
                        classes[1] = 0.023631176264450784; 
                    }
                } else {
                    if (features[0] <= 139943.5) {
                        classes[0] = 0.0017071805199281235; 
                        classes[1] = 0.0028189338876637806; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 0.00033096583400371663; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[9] <= 0.5) {
            if (features[2] <= 54.5) {
                if (features[6] <= 10.5) {
                    if (features[5] <= 7545.5) {
                        classes[0] = 0.19247779698198; 
                        classes[1] = 0.16656234658356833; 
                    } else {
                        classes[0] = 0.04096521651720532; 
                        classes[1] = 0.02484072596302077; 
                    }
                } else {
                    if (features[4] <= 0.6761254966259003) {
                        classes[0] = 0.054087559158429166; 
                        classes[1] = 0.050534153571792625; 
                    } else {
                        classes[0] = 0.024147306213155403; 
                        classes[1] = 0.03095198013930866; 
                    }
                }
            } else {
                if (features[6] <= 8.5) {
                    if (features[3] <= 0.5) {
                        classes[0] = 0.07199033501965825; 
                        classes[1] = 0.037444892629942904; 
                    } else {
                        classes[0] = 0.014053843562646058; 
                        classes[1] = 0.012294314467028297; 
                    }
                } else {
                    if (features[5] <= 6666.5) {
                        classes[0] = 0.03999097079977581; 
                        classes[1] = 0.036963795405592643; 
                    } else {
                        classes[0] = 0.05069650537725424; 
                        classes[1] = 0.03522022955032006; 
                    }
                }
            }
        } else {
            if (features[9] <= 1.5) {
                if (features[5] <= 992.0) {
                    if (features[6] <= 20.0) {
                        classes[0] = 0.000981049160907815; 
                        classes[1] = 0.000378845080870787; 
                    } else {
                        classes[0] = 1.2247322776216824e-05; 
                        classes[1] = 5.4389168633201835e-05; 
                    }
                } else {
                    if (features[5] <= 12170.5) {
                        classes[0] = 0.037807456216533204; 
                        classes[1] = 0.04248639208552684; 
                    } else {
                        classes[0] = 0.0022991576304087604; 
                        classes[1] = 0.0015180380840195812; 
                    }
                }
            } else {
                if (features[5] <= 23510.0) {
                    if (features[0] <= 41036.5) {
                        classes[0] = 0.004297038125347292; 
                        classes[1] = 0.004575836565023039; 
                    } else {
                        classes[0] = 0.00902016455523762; 
                        classes[1] = 0.013200386473853232; 
                    }
                } else {
                    if (features[8] <= 0.5) {
                        classes[0] = 5.41023010711905e-05; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 9.292528910976833e-05; 
                        classes[1] = 0.0; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[8] <= 3.5) {
                if (features[1] <= 0.09746037051081657) {
                    if (features[1] <= 2.519999998185085e-05) {
                        classes[0] = 0.02353372163556821; 
                        classes[1] = 0.02248337233665457; 
                    } else {
                        classes[0] = 0.11436941473577121; 
                        classes[1] = 0.07068812461781611; 
                    }
                } else {
                    if (features[1] <= 1.009725570678711) {
                        classes[0] = 0.3101631393288383; 
                        classes[1] = 0.26078459093582496; 
                    } else {
                        classes[0] = 0.011626992109249487; 
                        classes[1] = 0.015256390903743738; 
                    }
                }
            } else {
                if (features[4] <= 0.6336877942085266) {
                    if (features[0] <= 142218.5) {
                        classes[0] = 0.0063685432190936486; 
                        classes[1] = 0.005604683905846693; 
                    } else {
                        classes[0] = 0.00031467178208730706; 
                        classes[1] = 0.0009311902340401467; 
                    }
                } else {
                    if (features[4] <= 4.836538791656494) {
                        classes[0] = 0.005809664441880468; 
                        classes[1] = 0.011422455295195116; 
                    } else {
                        classes[0] = 0.0023831138922684714; 
                        classes[1] = 0.0024426666252185853; 
                    }
                }
            }
        } else {
            if (features[0] <= 640.5) {
                if (features[4] <= 583.5) {
                    if (features[5] <= 11596.5) {
                        classes[0] = 0.0003814303758894031; 
                        classes[1] = 2.4054909879332828e-05; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 1.974476934709123e-05; 
                    }
                } else {
                    if (features[1] <= 0.6865776777267456) {
                        classes[0] = 1.3126664643602775e-05; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 5.4061872805898e-05; 
                    }
                }
            } else {
                if (features[7] <= 1.5) {
                    if (features[4] <= 1946.5) {
                        classes[0] = 0.03798454994921546; 
                        classes[1] = 0.0413428778558677; 
                    } else {
                        classes[0] = 0.0020073829457680843; 
                        classes[1] = 0.001018731994719731; 
                    }
                } else {
                    if (features[1] <= 0.16059619933366776) {
                        classes[0] = 0.001194308157513916; 
                        classes[1] = 0.0023784230432774755; 
                    } else {
                        classes[0] = 0.022486332957139456; 
                        classes[1] = 0.026912238504840386; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[9] <= 0.5) {
            if (features[2] <= 59.5) {
                if (features[6] <= 8.5) {
                    if (features[8] <= 0.5) {
                        classes[0] = 0.1130562463392108; 
                        classes[1] = 0.10351605663757786; 
                    } else {
                        classes[0] = 0.09927776874591993; 
                        classes[1] = 0.06937679485648518; 
                    }
                } else {
                    if (features[4] <= 0.5687842071056366) {
                        classes[0] = 0.09113103265703243; 
                        classes[1] = 0.08099346862019197; 
                    } else {
                        classes[0] = 0.057096468551935224; 
                        classes[1] = 0.06575855646895852; 
                    }
                }
            } else {
                if (features[5] <= 3800.5) {
                    if (features[2] <= 65.5) {
                        classes[0] = 0.010290706910827336; 
                        classes[1] = 0.011415052318954328; 
                    } else {
                        classes[0] = 0.01744291309288754; 
                        classes[1] = 0.01322683999009097; 
                    }
                } else {
                    if (features[5] <= 4286.0) {
                        classes[0] = 0.006555037304123893; 
                        classes[1] = 0.0017196338033337935; 
                    } else {
                        classes[0] = 0.08513282125340078; 
                        classes[1] = 0.05709626529679909; 
                    }
                }
            }
        } else {
            if (features[5] <= 258.0) {
                if (features[2] <= 44.5) {
                    if (features[2] <= 22.5) {
                        classes[0] = 6.50370562020238e-05; 
                        classes[1] = 6.094699044907343e-05; 
                    } else {
                        classes[0] = 0.0003392537587882796; 
                        classes[1] = 0.0; 
                    }
                } else {
                    if (features[1] <= 0.2913941890001297) {
                        classes[0] = 0.00012182413232721741; 
                        classes[1] = 7.497880122989687e-06; 
                    } else {
                        classes[0] = 0.0001737452288674989; 
                        classes[1] = 0.0002593957497141311; 
                    }
                }
            } else {
                if (features[4] <= 0.6646689176559448) {
                    if (features[1] <= 0.14526984840631485) {
                        classes[0] = 0.005601308266298994; 
                        classes[1] = 0.00796974195806922; 
                    } else {
                        classes[0] = 0.034012168645930374; 
                        classes[1] = 0.03479416197020128; 
                    }
                } else {
                    if (features[0] <= 123620.5) {
                        classes[0] = 0.01235068177286421; 
                        classes[1] = 0.014956070697506076; 
                    } else {
                        classes[0] = 0.0021783187219581905; 
                        classes[1] = 0.004024184322968963; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[1] <= 0.8802691698074341) {
            if (features[4] <= 0.32039599120616913) {
                if (features[8] <= 0.5) {
                    if (features[6] <= 8.5) {
                        classes[0] = 0.06752228122361521; 
                        classes[1] = 0.05227244293020147; 
                    } else {
                        classes[0] = 0.02285324670870822; 
                        classes[1] = 0.023988478684444772; 
                    }
                } else {
                    if (features[6] <= 14.5) {
                        classes[0] = 0.0604519687600448; 
                        classes[1] = 0.032021322909145715; 
                    } else {
                        classes[0] = 0.010465875510088044; 
                        classes[1] = 0.009178898912495596; 
                    }
                }
            } else {
                if (features[4] <= 846.5) {
                    if (features[5] <= 899.5) {
                        classes[0] = 0.005608680306598681; 
                        classes[1] = 0.0021564529949549406; 
                    } else {
                        classes[0] = 0.18481731349777342; 
                        classes[1] = 0.18210429990013; 
                    }
                } else {
                    if (features[4] <= 2775.5) {
                        classes[0] = 0.029775043705371144; 
                        classes[1] = 0.01587323746690477; 
                    } else {
                        classes[0] = 0.01845183183635976; 
                        classes[1] = 0.01589855173409489; 
                    }
                }
            }
        } else {
            if (features[6] <= 8.5) {
                if (features[2] <= 68.5) {
                    if (features[1] <= 4.079586982727051) {
                        classes[0] = 0.10116671863376515; 
                        classes[1] = 0.10082347199083995; 
                    } else {
                        classes[0] = 0.0009095379470104683; 
                        classes[1] = 0.00019837638619761748; 
                    }
                } else {
                    if (features[0] <= 5740.5) {
                        classes[0] = 0.00013733987278941392; 
                        classes[1] = 0.00047211896935883625; 
                    } else {
                        classes[0] = 0.0046438872091907986; 
                        classes[1] = 0.0021402041919925978; 
                    }
                }
            } else {
                if (features[5] <= 6618.5) {
                    if (features[6] <= 14.5) {
                        classes[0] = 0.010635866904005862; 
                        classes[1] = 0.014881155150847246; 
                    } else {
                        classes[0] = 0.0014753388109834057; 
                        classes[1] = 0.0036301150708227268; 
                    }
                } else {
                    if (features[4] <= 0.6340774297714233) {
                        classes[0] = 0.00759648196090021; 
                        classes[1] = 0.006463415654564118; 
                    } else {
                        classes[0] = 0.0047089813479675195; 
                        classes[1] = 0.00667706281783393; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[7] <= 0.5) {
            if (features[8] <= 4.5) {
                if (features[5] <= 6583.5) {
                    if (features[2] <= 67.5) {
                        classes[0] = 0.21610479488213186; 
                        classes[1] = 0.20696165250078172; 
                    } else {
                        classes[0] = 0.026817168381554797; 
                        classes[1] = 0.017901145001706167; 
                    }
                } else {
                    if (features[2] <= 35.5) {
                        classes[0] = 0.019572796063267558; 
                        classes[1] = 0.02180751728052974; 
                    } else {
                        classes[0] = 0.19498185269313612; 
                        classes[1] = 0.1424135630532752; 
                    }
                }
            } else {
                if (features[4] <= 0.38572125136852264) {
                    if (features[5] <= 42191.0) {
                        classes[0] = 0.000501202277340721; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 0.00015972428152014894; 
                        classes[1] = 0.00037579570547090343; 
                    }
                } else {
                    if (features[8] <= 7.5) {
                        classes[0] = 0.004697163303068371; 
                        classes[1] = 0.007257509031687816; 
                    } else {
                        classes[0] = 0.00109167886436834; 
                        classes[1] = 0.003062659936348395; 
                    }
                }
            }
        } else {
            if (features[0] <= 640.5) {
                if (features[0] <= 189.5) {
                    if (features[7] <= 1.5) {
                        classes[0] = 4.382201735227457e-05; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 0.0; 
                        classes[1] = 3.1407561580834094e-05; 
                    }
                } else {
                    if (features[4] <= 583.5) {
                        classes[0] = 0.00028778741878045824; 
                        classes[1] = 0.0; 
                    } else {
                        classes[0] = 2.0729940469017916e-06; 
                        classes[1] = 8.96382607591457e-06; 
                    }
                }
            } else {
                if (features[4] <= 0.12271276861429214) {
                    if (features[5] <= 1652.0) {
                        classes[0] = 0.001416678500289684; 
                        classes[1] = 0.0021563544754701048; 
                    } else {
                        classes[0] = 0.01594128839745563; 
                        classes[1] = 0.015085613678652895; 
                    }
                } else {
                    if (features[7] <= 3.5) {
                        classes[0] = 0.04319725803524637; 
                        classes[1] = 0.04943568224571118; 
                    } else {
                        classes[0] = 0.0032639372194107658; 
                        classes[1] = 0.00542291037373428; 
                    }
                }
            }
        }
        return classes;
    });
    
    forest.push(function(features) {
        var classes = new Array(2);
        if (features[3] <= 0.5) {
            if (features[6] <= 13.5) {
                if (features[2] <= 65.5) {
                    if (features[5] <= 4833.5) {
                        classes[0] = 0.11262338311598726; 
                        classes[1] = 0.10977056453769173; 
                    } else {
                        classes[0] = 0.16732842554938754; 
                        classes[1] = 0.12945647253481543; 
                    }
                } else {
                    if (features[4] <= 0.32183943688869476) {
                        classes[0] = 0.022822180884258587; 
                        classes[1] = 0.010243878904841328; 
                    } else {
                        classes[0] = 0.022611629238921363; 
                        classes[1] = 0.017159850515469706; 
                    }
                }
            } else {
                if (features[4] <= 20.103015899658203) {
                    if (features[4] <= 0.6798966228961945) {
                        classes[0] = 0.036483390385389; 
                        classes[1] = 0.037150236553783224; 
                    } else {
                        classes[0] = 0.010323308268456488; 
                        classes[1] = 0.015510467657763623; 
                    }
                } else {
                    if (features[2] <= 42.5) {
                        classes[0] = 0.0008610317325558081; 
                        classes[1] = 0.0018037862017782234; 
                    } else {
                        classes[0] = 0.0070349677968098235; 
                        classes[1] = 0.0035867018784582223; 
                    }
                }
            }
        } else {
            if (features[3] <= 1.5) {
                if (features[4] <= 0.020816932432353497) {
                    if (features[0] <= 17975.0) {
                        classes[0] = 0.0005245089692746002; 
                        classes[1] = 4.9383298580535484e-05; 
                    } else {
                        classes[0] = 0.003197387462720729; 
                        classes[1] = 0.002133660483817875; 
                    }
                } else {
                    if (features[0] <= 135606.5) {
                        classes[0] = 0.07751289615263386; 
                        classes[1] = 0.07396895850751833; 
                    } else {
                        classes[0] = 0.008128246154905604; 
                        classes[1] = 0.010444916390589833; 
                    }
                }
            } else {
                if (features[1] <= 0.007018525619059801) {
                    if (features[0] <= 131554.5) {
                        classes[0] = 0.001892645382741918; 
                        classes[1] = 0.0036253890968150487; 
                    } else {
                        classes[0] = 0.0002471157812106904; 
                        classes[1] = 1.9955471617023207e-05; 
                    }
                } else {
                    if (features[8] <= 3.5) {
                        classes[0] = 0.05178793907391922; 
                        classes[1] = 0.057095075374737965; 
                    } else {
                        classes[0] = 0.0016359882437001197; 
                        classes[1] = 0.002965658398857492; 
                    }
                }
            }
        }
        return classes;
    });
    
    this.predict = function(features) {
        var n_estimators = forest.length;
        var preds = new Array(n_estimators);
        var n_classes = 2;
        var classes = new Array(n_classes).fill(0.);
        var normalizer, sum, idx, val;
        var i, j;
    
        for (i = 0; i < n_estimators; i++) {
            preds[i] = forest[i](features);
        }
        for (i = 0; i < n_estimators; i++) {
            normalizer = 0.;
            for (j = 0; j < n_classes; j++) {
                normalizer += preds[i][j];
            }
            if (normalizer == 0.) {
                normalizer = 1.0;
            }
            for (j = 0; j < n_classes; j++) {
                preds[i][j] = preds[i][j] / normalizer;
                if (preds[i][j] <= 2.2204460492503131e-16) {
                    preds[i][j] = 2.2204460492503131e-16;
                }
                preds[i][j] = Math.log(preds[i][j]);
            }
            sum = 0.0;
            for (j = 0; j < n_classes; j++) {
                sum += preds[i][j];
            }
            for (j = 0; j < n_classes; j++) {
                preds[i][j] = (n_classes - 1) * (preds[i][j] - (1. / n_classes) * sum);
            }
        }
        for (i = 0; i < n_estimators; i++) {
            for (j = 0; j < n_classes; j++) {
                classes[j] += preds[i][j];
            }
        }
    
        return findMax(classes);
    };
};

if (typeof process !== 'undefined' && typeof process.argv !== 'undefined') {
    if (process.argv.length - 2 === 11) {

        // Features:
        var features = process.argv.slice(2);

        // Prediction:
        var clf = new AdaBoostClassifier();
        var prediction = clf.predict(features);
        console.log(prediction);

    }
}