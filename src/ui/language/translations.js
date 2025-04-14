const translations = {
    en: {
        home: {
            global: {
                actionButton: "Discover benefits",
                actionButtonShort: "Discover"
            },
            menu: {
                howWorks: "How it works",
                principles: "Principles",
                aboutUs: "Team",
                improve: "Help us improve",
                collaborate: "Collaborate",
                activityLog: "Activity log"
            },
            hero: {
                headerShard1: "Discover ",
                headerShard2: "and more!",
                headerBenefits: ["Child allowance", "Housing benefit", "Citizen's benefit"],
                subHeader: "Find social benefits that fit you and your situation. Answer a few questions and we will show you which social benefits you might be eligible for.",
                childAllowance: "Child allowance",
                housingBenefit: "Housing benefit",
                citizensBenefit: "Citizen's benefit",
                bafög: "Bafög",
                manyMore: "Many more"
            },
            fact: {
                subHeader: "unclaimed social benefits per year",
                text: "We are on a mission to make social benefits in Germany accessible and easy to understand by everyone. We show you what social benefits you might be eligible for and point you the way to apply for them."
            },
            howItWorks: {
                header: "How it works",
                part1Header: "Answer some basic questions",
                part1Text: "Do a quick check, create your profile, or browse our list of social benefits by topic.",
                part2Header: "Get your potential benefits listed",
                part2Text: "The more complete your profile is, the more accurate the list of benefits you get.",
                part3Header: "Learn about relevant benefits",
                part3Text: "Learn about requirements and necessary steps to apply for you benefits.",
            },
            mission: {
                header: "Our mission: Information for all!",
                part1Header: "Open Data",
                part1Text: "Important information for citizens about their benefits is all too often difficult to find. We make our catalogue of conditions for social benefits publicly available.",
                part2Header: "User Centric Design",
                part2Text: "We work in a user-centered and iterative way. We talk with users and constantly improve our product so that it is easy to use, understandable and accessible.",
            },
            theBasics: {
                header: "The basics",
                line1: "Free to use",
                line2: "Your data is yours",
                line3: "No registration",
                line4: "On your phone or laptop"
            },
            feedback: {
                header: "Help us improve",
                text: "Your feedback is essential for us to understand how we can improve your experience with the application. It helps us improve and add features that allow people to find the right benefits.",
                ratePrompt: "How do you rate your overall experience with FörderFunke?",
                1: "Worst",
                2: "Poor",
                3: "Fine",
                4: "Good",
                5: "Great",
                writePrompt: "If you like you can write us a few lines here.",
                placeholder: "Enter your text",
                submitting: "Submitting...",
                submitBtn: "Submit",
                messagePrompt: "Or send us an email. We will get back to you as quickly as we can!"
            },
            principles: {
                header: "And this is how it works",
                part1Header: "Privacy by Design",
                part1Text: "We believe you should have control over your data. That's why we keep your data only on your device. It is never visible to us or anyone else.",
                part2Header: "Open Source",
                part2Text: "Our development work is open source and tracked on GitHub. You can see our latest five commits here or explore more on our GitHub organization page.",
                githubHeader: "Want to know more?",
                githubText: "The last commits"
            },
            connect: {
                header: "Let's connect",
            },
            supportedBy: {
                header: "Our support",
                headerPF: "Prototype Fund",
                headerNGI: "NGI Search",
                textPF: "We were part of the 15th round of the Prototype Fund from March to September 2024. Förderkennzeichen: 01IS24S19.",
                textNGI: "We are part of the current open call of the NGI Search incubator. We receive funding and additional support to further develop FörderFunke.",
                disclaimerTitleNGI: "Disclaimer",
                disclaimerNGI: "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or European Commission. Neither the European Union nor the granting authority can be held responsible for them. Funded within the framework of the NGI Search project under grant agreement No 101069364.",
            },
        },
        app: {
            loading: {
                header: "Validating your benefits",
            },
            nav: {
                backBtn: "Back",
                previousQuestion: "Previous question"
            },
            privacySite: {
                header: "Let's check your benefits!",
                subHeader: "Your data is only stored locally",
                text1: "Only you should have access to your personal data. That is why we do not offer user accounts managed by us. All of your information is only stored locally in your browser.",
                optionHeader: "You do have some options though:",
                option1: "You can export your data as an RDF file.",
                option2: "You can erase it from the browser with one click.",
                button: "Let's go!"
            },
            welcomeBack: {
                header: "Welcome back!",
                text: "We found a profile in the local storage of your browser. Do you want to continue using it?",
                yesBtnTitle: "Yes",
                yesBtnText: "You can continue exploring with your profile",
                noBtnTitle: "No",
                noBtnText: "You will start the journey with a new profile",
                exportBtn: "Export your profile",
                deleteBtn: "Delete your profile",
            },
            discoverChoice: {
                header: "You have the choice:",
                text: "You have two options to discover benefits for yourself: You can answer a few questions for a quick check, or you can browse the entire catalog.",
                quickCheck: "Quick eligibility check",
                quickCheckComment: "Based on up to 10 benefits",
                browseAll: "Browse all benefits",
            },
            topicSelection: {
                header: "Quick eligibility check",
                selectAll: "Select all",
                confirmBtn: "Confirm",
                socialBenefitsTitle: "Social benefits",
                socialBenefitsSubtitle: "Which topics are you interested in exploring benefits for?",
                businessTitle: "Business and startup support",
                businessSubtitle: "Do you want to explore support programs for business and startups?",
            },
            topicsChosen: {
                topicsTitle: "Selected topics",
                topicsText: "Based on your chosen topics we will provide you with a list of benefits you may be eligible for.",
                benefitTitle: "Selected benefit",
                benefitText: "Based on your chosen benefit we will ask you the questions necessary to determine your eligibility.",
                noChoiceTitle: "You have not selected any topics. The quick check will be applied to all topics.",
                discoverBtn: "Discover your benefits",
            },
            questions: {
                progress: "Question",
                info: "We update the number of questions and potential benefits depending on your answers.",
                multipleAnswers: "Multiple answers possible",
                confirmBtn: "Confirm",
                showComment: "Show explanation",
                unlockedPart1: "You have unlocked",
                unlockedPart2Multiple: "benefits",
                unlockedPart2Single: "benefit",
                unlockedPart3: "based on your answers.",
            },
            datafields: {
                pickBday: "Pick your birthdate",
                boolYes: "Yes",
                boolNo: "No",
            },
            qsComplete: {
                header: "Your quick check is complete",
                hint: "You currently cannot edit your profile data. If you need to make changes, you can restart the discovery journey.",
                discoverBtn: "Discover your benefits",
                restartBtn: "Restart"
            },
            browseAll: {
                header: "Your potential benefits",
                profileBtn: "locally stored profile",
                disclaimerTitle: "Informal Evaluation",
                disclaimerText: "The results are based on the information you provided. They are not legally binding and should be considered as informational or advisory.",
                info: "Results are not legally binding and should be considered as informational or advisory",
                preliminaryEligibleTitle: "Preliminary eligibility",
                preliminaryEligibleText: "A final assessment is currently not possible for some benefits. In some cases, detailed information about income and assets is required to make an accurate calculation – this is currently beyond our eligibility check, but we link helpful calculators. In addition to the formal review, some benefits are also subject to a content review, such as project proposals – we currently only offer the formal review.",
                eligible: "Eligible:",
                preliminaryEligible: "Preliminarily eligible:",
                notEligible: "Not eligible:",
                missingData: "Missing data:",
                checkElBtn: "Check eligibility",
                learnMoreBtn: "Learn more!",
                legendTitle: "Legend",
                legendText: "We use a color code to indicate the likelihood of eligibility. See the legend",
                legend: {
                    probableEligible: "Probable eligibility",
                    preliminaryEligible: "Eligibility requires further review. This could mean, for example, that more detailed information about income is required in the application or that the content match of a project description is checked.",
                    probableNotEligible: "Probable ineligibility",
                    notEnoughData: "Not enough data for assessment",
                    beta: "Some benefits are still in beta, meaning they are not fully tested and may contain errors."
                }
            },
            profile: {
                header: "Your locally stored profile",
                noInfoYet: "You haven't provided any information about yourself yet"
            },
            benefitPage: {
                LeiKaInfo: "LeiKa is a unique identifier for benefits in Germany. It helps you to find the right benefit for you.",
                inTopics: "Appears in the following topics",
                eligibilityBtn: "Check eligibility",
                whatIsIt: "What is ",
                applicationProcess: "How do I apply?",
                examples: "Examples",
                fundingConditions: "What are the funding conditions?",
                requiredDocuments: "Which documents do I need?",
                additionalSupport: "Where can I get additional support?",
                legalBasis: "Legal basis",
                furtherInformation: "Further information",
                rulesTable: {
                    header: "Who is eligible?",
                    yourAnswer: "Your answer",
                    mustBeAnswered: "Must be answered",
                    mustBe: "Must be",
                    mustNotBe: "Must not be",
                    oneOf: "one of",
                    oneOrBothTrue: "One or both of the following must be true",
                    inferredFrom: "inferred from your answer to",
                    yes: "yes",
                    no: "no",
                    unknown: "unknown"
                },
                moreInfo: "More information available here"
            }
        },
        activityLog: {
            milestones: {
                title: "Milestones",
                description: "This list offers an overview of the milestones we're currently working on, as well as those we've already achieved.",
                listTitleComingUp: "Coming up",
                listTitlePast: "Past",
                comingUpList: [
                    {
                        title: "XXX Collaboration",
                        date: "September 2024",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut "
                    }
                ],
                pastList: [
                    {
                        title: "New feedback and collaboration sections",
                        date: "September 2024",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut "
                    },
                    {
                        title: "Demo Day Prototype Fund",
                        date: "September 2024",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut "
                    }
                ]
            },
            gitCommits: {
                title: "Github Commits",
                description: "Our development work is fully open-source and tracked on GitHub. You can view our latest five commits right here, or explore more by visiting our GitHub organization page.",
                listTitle: "Last 5 commits",
                today: "Today",
                yesterday: "Yesterday",
                daysAgo: "{{count}} days ago",
                errorMessage: "An error occurred while fetching the commits. Please try again later.",
            },
        }
    },
    de: {
        home: {
            global: {
                actionButton: "Anspruch prüfen",
                actionButtonShort: "Prüfen"
            },
            menu: {
                howWorks: "So geht's",
                principles: "Prinzipien",
                aboutUs: "Team",
                improve: "Feedback",
                collaborate: "Zusammenarbeit",
                activityLog: "Aktivitäten"
            },
            hero: {
                headerShard1: "Entdecke ",
                headerShard2: "und mehr!",
                headerBenefits: ["Kindergeld", "Wohngeld", "Bürgergeld"],
                subHeader: "Finde Sozialleistungen, die zu dir und deiner Situation passen. Beantworte einfach ein paar fragen und wir zeigen dir, auf welche Sozialleistungen du Anspruch haben könntest.",
                childAllowance: "Kinderzuschlag",
                housingBenefit: "Wohngeld",
                citizensBenefit: "Bürgergeld",
                bafög: "Bafög",
                manyMore: "Viele Weitere",
            },  
            fact: {
                subHeader: "nicht in Anspruch genommener Sozialleistungen pro Jahr",
                text: "Mit Förderfunke möchten wir erreichen, dass Sozialleistungen in Deutschland für alle zugänglich und leicht verständlich sind. Wir zeigen dir, auf welche Sozialleistungen du Anspruch haben könntest und wie du sie beantragen kannst."
            },
            howItWorks: {
                header: "So geht's",
                part1Header: "Beantworte ein paar Fragen",
                part1Text: "Dein Profil wird mit den Voraussetzungen für unterschiedliche Leistungen verglichen.",
                part2Header: "Entdecke potenzielle Angebote",
                part2Text: "In der Übersicht erfährst, auf welche Leistungen du Anspruch haben könntest.",
                part3Header: "Informiere dich zu Leistungen",
                part3Text: "In der Detailansicht kannst du dich genauer über eine Leistung informieren."
            },
            mission: {
                header: "Unsere Mission: Informationen für alle!",
                part1Header: "Offene Daten",
                part1Text: "Wichtige Informationen zu Leistungen sind oft schwer zu finden. Wir machen unseren Katalog der Bedingungen für Sozialleistungen öffentlich zugänglich. Dabei setzen wir auf etablierte Standards und Formate.",
                part2Header: "Nutzerzentriertes Design",
                part2Text: "Wir arbeiten nutzerzentriert und iterativ. Deswegen sprechen wir regelmäßig mit Nutzer*innen und versuchen ständig, das Produkt zu verbessern. Damit alle eine Chance auf Sozialleistungen haben."
            },
            theBasics: {
                line1: "FörderFunke ist kostenlos nutzbar",
                line2: "Deine Daten gehören dir! Alle Informationen, die du eingibst, werden nur lokal auf deinem Gerät gespeichert",
                line3: "Keine Registrierung, kein Login erforderlich",
                line4: "Du kannst es auf dem Handy oder Laptop nutzen"
            },
            feedback: {
                header: "Feedback",
                text: "Wir freuen uns über dein Feedback! Mit deiner Hilfe können wir FörderFunke noch besser machen, damit jeder die passenden Leistungen schnell und einfach finden kann.",
                writePrompt: "Wenn du möchtest, kannst du uns hier ein paar Zeilen schreiben.",
                placeholder: "Gib deinen Text ein",
                submitting: "Wird gesendet...",
                submitBtn: "Absenden",
                messagePrompt: "Oder schick uns eine Nachricht. Wir melden uns so schnell wie möglich zurück!"
            },
            principles: {
                header: "Und so funktioniert's",
                part1Header: "Privacy by Design",
                part1Text: "Uns ist wichtig, dass du die Kontrolle über deine Daten behältst. Deshalb bleiben deine Daten ausschließlich auf deinem Endgerät. Sie sind zu keinem Zeitpunkt für uns oder andere einsehbar.",
                part2Header: "Open Source",
                part2Text: "Unsere Entwicklungsarbeit ist Open Source und wird auf GitHub erfasst. Du kannst unsere letzten fünf Commits hier einsehen oder mehr auf unserer GitHub-Organisationsseite entdecken.",
                githubHeader: "Du willst es genau wissen?",
                githubText: "Die letzten Commits"
            },
            connect: {
                header: "Das Team",
            },
            supportedBy: {
                header: "Unsere Unterstützung",
                headerPF: "Prototype Fund",
                headerNGI: "NGI Search",
                textPF: "Wir waren Teil der 15. Runde des Prototype Fund von März bis September 2024. Förderkennzeichen: 01IS24S19.",
                textNGI: "Wir sind Teil des laufenden Open Calls des NGI Search Incubators. Wir erhalten Fördermittel und zusätzliche Unterstützung, um FörderFunke weiterzuentwickeln.",
                disclaimerTitleNGI: "Hinweis",
                disclaimerNGI: "Finanziert durch die Europäische Union. Die geäußerten Ansichten und Meinungen stammen jedoch ausschließlich von den Autor:innen und spiegeln nicht unbedingt die Ansichten der Europäischen Union oder der Europäischen Kommission wider. Weder die Europäische Union noch die Bewilligungsbehörde können dafür verantwortlich gemacht werden. Finanziert im Rahmen des NGI Search Projekts unter der Fördernummer Nr. 101069364."
            }
        },
        app: {
            loading: {
                header: "Wir prüfen Deine Leistungen",
            },
            nav: {
                backBtn: "Zurück",
                previousQuestion: "Vorherige Frage"
            },
            privacySite: {
                header: "Lass uns deine Ansprüche prüfen!",
                subHeader: "Deine Daten werden nur lokal gespeichert",
                text1: "Nur du solltest Zugriff auf deine persönlichen Daten haben. Deshalb bieten wir keine von uns verwalteten Benutzerkonten an. Alle deine Informationen werden nur lokal in deinem Browser gespeichert.",
                optionHeader: "Du hast aber einige Optionen:",
                option1: "Du kannst deine Daten als RDF-Datei exportieren.",
                option2: "Du kannst sie mit einem Klick aus dem Browser löschen.",
                button: "Los geht's!"
            },
            welcomeBack: {
                header: "Willkommen zurück!",
                text: "Wir haben ein Profil im lokalen Speicher deines Browsers gefunden. Möchtest du es weiter nutzen?",
                yesBtnTitle: "Ja",
                yesBtnText: "Du kannst mit deinem Profil weiter erkunden",
                noBtnTitle: "Nein",
                noBtnText: "Du wirst die Reise mit einem neuen Profil beginnen",
                exportBtn: "Profil exportieren",
                deleteBtn: "Profil löschen",
            },
            discoverChoice: {
                header: "Du hast die Wahl:",
                text: "Du hast zwei Möglichkeiten, um Leistungen für dich zu entdecken. Du kannst ein paar Fragen beantworten und so einen Schnellcheck machen oder dir den gesamten Katalog ansehen.",
                quickCheck: "Schneller Anspruchscheck",
                quickCheckComment: "Basierend auf bis zu 10 Leistungen",
                quickCheckInfo: "Der Schnellcheck ist eine schnelle Methode, um deinen Anspruchsstatus zu überprüfen. Es dauert nur wenige Minuten.",
                browseAll: "Alle Leistungen durchsuchen",
                browseInfo: "Beim Durchsuchen erhältst du einen Überblick über die im Katalog verfügbaren Programme. Für eine detaillierte Anspruchsüberprüfung musst du jedoch einzeln vorgehen."
            },
            topicSelection: {
                header: "Schneller Anspruchscheck",
                selectAll: "Alle auswählen",
                confirmBtn: "Bestätigen",
                socialBenefitsTitle: "Sozialleistungen",
                socialBenefitsSubtitle: "Für welche Themen möchtest du Leistungen entdecken?",
                businessTitle: "Gründung und Unternehmensförderung",
                businessSubtitle: "Möchtest du Förderprogramme für Unternehmen und Startups erkunden?",
            },
            topicsChosen: {
                topicsTitle: "Ausgewählte Themen",
                topicsText: "Basierend auf deinen ausgewählten Themen stellen wir dir eine Liste von Leistungen zur Verfügung, für die du möglicherweise infrage kommst.",
                benefitTitle: "Ausgewählte Leistung",
                benefitText: "Basierend auf deiner ausgewählten Leistung stellen wir dir die notwendigen Fragen, um deine Anspruchsberechtigung zu ermitteln.",
                noChoiceTitle: "Du hast keine Themen ausgewählt. Der Schnellcheck wird auf alle Themen angewendet.",
                discoverBtn: "Entdecke deine Leistungen",
            },
            questions: {
                progress: "Frage",
                info: "Wir aktualisieren die Anzahl der Fragen und möglichen Leistungen basierend auf deinen Antworten.",
                multipleAnswers: "Mehrere Antworten möglich",
                confirmBtn: "Bestätigen",
                showComment: "Erklärung anzeigen",
                unlockedPart1: "Du hast",
                unlockedPart2Multiple: "Leistungen freigeschaltet",
                unlockedPart2Single: "Leistung freigeschaltet",
                unlockedPart3: "basierend auf deinen Antworten.",
            },
            datafields: {
                pickBday: "Wähle dein Geburtsdatum",
                boolYes: "Ja",
                boolNo: "Nein",
            },
            qsComplete: {
                header: "Dein schneller Anspruchscheck ist abgeschlossen",
                hint: "Du kannst deine Profildaten derzeit nicht bearbeiten. Wenn du Änderungen vornehmen möchtest, kannst du den Entdeckungsprozess neu starten.",
                discoverBtn: "Entdecke deine Leistungen",
                restartBtn: "Neu starten"   
            },
            browseAll: {
                header: "Deine potenziellen Leistungen",
                profileBtn: "lokal gespeichertes Profil",
                disclaimerTitle: "Unverbindliche Bewertung",
                disclaimerText: "Die Ergebnisse basieren auf den von dir angegebenen Informationen. Sie sind nicht rechtsverbindlich und sollten als informativ oder beratend betrachtet werden.",
                info: "Die Ergebnisse sind nicht rechtsverbindlich und sollten als informativ oder beratend betrachtet werden.",
                preliminaryEligibleTitle: "Vorbehaltlicher Anspruch",
                preliminaryEligibleText: "Eine abschließende Einschätzung ist für einige Leistungen derzeit nicht möglich. In manchen Fällen sind detaillierte Angaben zu Einkommen und Vermögen erforderlich, um eine genaue Berechnung durchzuführen – dies liegt aktuell außerhalb unserer Anspruchsprüfung, aber wir verlinken hilfreiche Rechner. Zudem unterliegen manche Leistungen neben der formellen Prüfung auch einer inhaltlichen Bewertung, beispielsweise von Projekt- oder Vorhabenbeschreibungen – derzeit bieten wir nur die formelle Prüfung an.",
                eligible: "Anspruch:",
                preliminaryEligible: "Vorbehaltlich Anspruch:",
                notEligible: "Kein Anspruch:",
                missingData: "Fehlende Daten:",
                checkElBtn: "Anspruch prüfen",
                learnMoreBtn: "Mehr erfahren!",
                legendTitle: "Legende",
                legendText: "Wir verwenden eine Farbkodierung, um die Wahrscheinlichkeit der Anspruchsberechtigung anzuzeigen. Siehe die Legende",
                legend: {
                    probableEligible: "Wahrscheinlich besteht Anspruch",
                    preliminaryEligible: "Anspruch erfordert weitere Prüfung. Dies kann beispielsweise bedeuten, dass genauere Angaben zu den Einkommensverhältnissen im Antrag erforderlich sind oder die inhaltliche Übereinstimmung einer Projektbeschreibung überprüft wird.",
                    probableNotEligible: "Wahrscheinlich besteht kein Anspruch",
                    notEnoughData: "Nicht genügend Angaben für eine Einschätzung",
                    beta: "Eininge Leistungen sind noch in der Beta-Phase, d.h. sie sind noch nicht vollständig getestet und können Fehler enthalten."
                }
            },
            profile: {
                header: "Dein lokal gespeicherters Profil",
                noInfoYet: "Du hast noch keine Informationen über dich angegeben",
            },
            benefitPage: {
                LeiKaInfo: "LeiKa ist ein eindeutiger Identifikator für Leistungen in Deutschland. Er hilft dir, die richtige Leistung für dich zu finden.",
                inTopics: "Erscheint in den folgenden Themen",
                eligibilityBtn: "Anspruch prüfen",
                whatIsIt: "Was ist ",
                applicationProcess: "Wie stelle ich den Antrag?",
                examples: "Beispiele",
                fundingConditions: "Wie sieht die Leistung oder Förderung aus?",
                requiredDocuments: "Welche Dokumente benötige ich?",
                additionalSupport: "Wo kann ich zusätzliche Unterstützung erhalten?",
                legalBasis: "Rechtsgrundlage",
                furtherInformation: "Weitere Informationen",
                rulesTable: {
                    header: "Wer ist anspruchsberechtigt?",
                    yourAnswer: "Deine Antwort",
                    mustBeAnswered: "Muss beantwortet werden",
                    mustBe: "Muss sein",
                    mustNotBe: "Darf nicht sein",
                    oneOf: "eines von",
                    oneOrBothTrue: "Eines oder beide der folgenden müssen zutreffen",
                    inferredFrom: "abgeleitet von deiner Antwort auf",
                    yes: "ja",
                    no: "nein",
                    unknown: "unbekannt"
                },
                moreInfo: "Weitere Informationen sind hier verfügbar"
            }
        },
        activityLog: {
            milestones: {
                title: "Meilensteine",
                description: "Die Übersicht zeigt die Meilensteine der vergangenen Monate und gibt einen Ausblick auf die kommenden Ziele.",
                listTitleComingUp: "Aktuell",
                listTitlePast: "Vergangen"
            },
            gitCommits: {
                title: "Github Commits",
                description: "Unsere Entwicklungsarbeit ist Open Source und wird auf GitHub erfasst. Du kannst unsere letzten fünf Commits hier einsehen oder mehr auf unserer GitHub-Organisationsseite entdecken.",
                listTitle: "Die letzten 5 Commits",
                today: "Heute",
                yesterday: "Gestern",
                daysAgo: "Vor {{count}} Tagen",
                errorMessage: "Beim Abrufen der Commits ist ein Fehler aufgetreten. Bitte versuche es später erneut.",
            }
        }
    },
};

export default translations;
