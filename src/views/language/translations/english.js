import termsEN from './termsEN'

export default {
    "nav": {
        "home": "Home",
        "map": "Map",
        "team": "Team",
        "contact": "Contact",
        "about": "About",
        "login": "Sign In",
        "profile": "My Profile",
        "dashboard": "Dashboard",
        "logout": "Logout",
        "msgLogout": "bye bye see you!"
    },
    "main": {
        "developedBy": "Developed by INPE"
    },
    "dashboard": {
        "nav": {
            "home": "Home",
            "infos": "Information",
            "newLayer": "New Layer",
            "keywords": "Keywords",
            "layer": "Layers"
        },
        "home":{
            "dashboard": "Dashboard",
            "notifications": "Notifications",
            "myLayers": "My Layers",
            "sharedLayers": "Shared Layers"
        },
        "newLayer": {
            "name": "Name",
            "keywords": "Keywords",
            "collaborators": "Collaborators",
            "description": "Description",
            "reference": "Reference",
            "addedReferences": "Addes References",
            "add": "Add Reference",
            "submit": "Submit",
            "fileInput": "Input File",
            "zipFile": "ZIP File",
            "nameD": "Layer name. It is unique in the system.",
            "keywordsD": "Keyword is a tag/label related to the layer, which indicates what type it belongs, such as streets, addresses, crimes and so on.",
            "collaboratorsD": "Collaborators are the people who can add, edit or remove the vectors from the layer. Vectors are the geometries from the layer, such as a point, line or polygon. Only the layer creator can edit this field for security!",
            "descriptionD": "Description is a description/information about the layer.",
            "referenceD": "Reference is the source of that data, whether it is from a book, article, dissertation or so on. It should be in the ABNT format.",
            "epsgD": "It is the projection of the Shapefile, a integer number, for example 4326",
            "fileInputD": "The file that will be inserted is a ZIP compressed file that contains the Shapefile to be sent. Inside this ZIP file should contains all the files of a Shapefile, such as “.shp“, “.prj“, “.dbf“ and so on.",
            "chooseFile": "Choose file",
            "temporalColumns": "Temporal Columns",
            "lblStartDate": "Start date",
            "lblEndDate": "End date",
            "lblStartDateColumn": "Start date column",
            "lblEndDateColumn": "End date column",
            "lblStartDateMask": "Start date mask",
            "lblEndDateMask": "End date mask",
            "startDate": "Start date of the temporal bounding box of the layer. This is the start date of the period that covers the layer data. For example: the layer has the period from 01-01-1900 to 31-12-1930. Hence the start date is 01-01-1900.",
            "endDate": "End date of the temporal bounding box of the layer. This is the end date of the period that covers the layer data. For example: the layer has the period from 01-01-1900 to 31-12-1930. Therefore the end date is 31-12-1930.",
            "startDateColumn": "It indicates which column contains the start date of the layer.",
            "endDateColumn": "It indicates which column contains the end date of the layer.",
            "startDateMask": "It indicates which mask is used by the start date of the layer.",
            "endDateMask": "It indicates which mask is used by the end date of the layer.",
            "mountLayer": {
                "btnRadio": {
                    "import": "IMPORT FILE",
                    "create": "CREATE EMPTY LAYER"
                },
                "lblAttr": "Attributes",
                "lblAttrD": "Add the attributes of the new layer. It can NOT: start with numbers, have accents, special characters, whitespaces and be reserved name.",
                "boxAttr": {
                    "lblColumnName": "Column Name",
                    "lblColumnType": "Column Type",
                    "msgAlertRemove": "Are you sure you want to delete the column?",
                    "btnAlert": {
                        "no": "no",
                        "yes": "YES"
                    }
                }
            }
        },
        "editLayer": {
            "delete": "Delete",
            "layer": "Layer Edit",
            "editLayer": "Edit Layer"
        },
        "keywords":{
            "keywords": "Keywords",
            "newKeyword": "New Keyword",
            "myKeywords": "My Keywords",
            "nameD": "Name of the new keyword. It is unique in the system.",
            "name": "Name"
        }
    },
    "login": {
        "inputEmail": "Email address",
        "inputPassword": "Password",
        "register": "Register now",
        "btnText": "Login",
        "terms": "If you sign in with the social network, you automatically agree to the terms of the project.",
        "lbReadme": "read the terms here",
        "msg": {
            "success": "WELCOME",
            "err404": "<strong>Email</strong> or <strong>password</strong> incorrect!",
            "err409": "You have <strong>not yet confirmed your email</strong>, access your email box and confirm it by following instructions!"
        }
    },
    "home":{
      "title1": "What is it?",
      "title2": "How?",
      "title3": "When will it be ready?",
      "title4": "How to cite a layer?",
      "example": "Example",
      "column1": "Pauliceia 2.0 is a platform to make the collaborative mapping of history of the city of São Paulo for the period 1870 to 1940.",
      "column2": `By means of an interface, researchers can share their spatial data sets in the platform. The data sets must be spatially localizable.<br>
                    So, a historical cartographic base of the city will be enriched, also making this data available to all.<br>
                    The user that collaborates will have a map or a view of his or her own research.`,
      "column3": "A beta is currently available for testing. The final version is scheduled for January 2022.",

    },
    "contact":{
      "title1": "Collaborative mapping of the history of São Paulo (1870-1940).",
      "contact": "Contact us:",
      "links": "USEFUL LINKS",
      "institutional": "Institutional",
      "platforms": "Platforms / Free Softwares",
      "base": "Cartographic base",
      "envolvidos": {
        "arquivo_publico_sp": "Public Archive of the State of Sao Paulo",
        "emory_university": "Emory University",
        "fapesp": "Foundation for Research Support of Sao Paulo",
        "himaco": "Hímaco",
        "inpe": "National Institute for Space Research (INPE)",
        "unifesp": "Federal University of Sao Paulo (UNIFESP)",
      },
    },
    "about":{
        "title1": "Who developed it?",
        "title2": "Who finaced it?",
        "title3": "What technology is used?",
        "title4": "Realization:",
        "title5": "Support:",
        "title6": "Financing:",
        "title7": "Who are we?",
        "text1": `The project is a partnership between INPE (National Institute for Space Research), UNIFESP (Guarulhos and São José dos Campos Units) and the State Archive of São Paulo and Emory University (United States). <br>
                    The concept of "open science" that guides the project makes it a friendly initiative to involve all stakeholders in various stages of its implementation.`,
        "text2": "The project was one of the four contemplated by the eScience 2016 call of FAPESP (Foundation for Research Support of the State of São Paulo), which stimulates collaboration between areas of computer science and any other area of knowledge.",
        "text3": `Pauliceia 2.0 platform is open source, web-based and service-oriented. It is implemented using the GIS library TerraLib and the web geoportal framework TerraBrasilis developed by INPE. The team also uses the gvSIG software, a free alternative to open GIS.<br>
                    The platform is implemented based on the Single Page Application (SPA) concept using the framework Vue.js developed in JavaScript language and the tools jQuery and OpenLayers.`,
        "name1": "Luís Ferla - coordinator",
        "desc1": "Luis Ferla is professor of contemporary history at Unifesp. In this University, he coordinates the research group Himaco (History, maps and computers) and lab.hum (Laboratory of Digital Humanities). Together with Karla Donato Fook, he is one of the coordinators of the project",
        "name2": "Karine Reis Ferreira ",
        "desc2": "Karine Reis is PhD in Applied Computer by the National Institute For Space Research (INPE), she works on researching in geoinformatics and on geographic information systems development. She is professor of the Applied Computer Graduate Course at INPE and her main research topic is representation, processing and analysis of big spatiotemporal data and temporal GIS development. She was the coordinator of the Pauliceia project from 2016 to 2019.",
        "name3": "Andrew Graham Britt",
        "desc3": "Andrew G. Britt is a historian of Latin America (Brazil) and a digital scholarship developer. He is currently a Postdoctoral Fellow at Northwestern University and a member of the project team.",
        "name4": "Ana Maria Alves Barbour",
        "desc4": "Ana Maria Barbour is a journalist, historian and currently pursuing her master's degree in History at Unifesp. She is a collaborator in the Pauliceia 2.0 project.",
        "name5": "Cíntia Rodrigues de Almeida",
        "desc5": "Cintia Rodrigues de Almeida is majoring History at UNIFESP and has a research scholarship given by FAPESP.",
        "name6": "Carlos Alberto Noronha",
        "desc6": "Carlos Noronha, is a IC student at INPE and software developer with emphasis on web systems.",
        "name7": "Cristiane Regina Myiasaka",
        "desc7": "Cristiane Miyasaka, Ph.D, is a member of Hímaco (Unifesp). Coordinates the historical address database team.",
        "name8": "Daniela Leal Musa",
        "desc8": "Daniela Musa is professor at the Institute of Science and Tecnology of the Federal University of São Paulo (UNIFESP), Brazil. Her research interests include Databases, Semantic Web and spatial-temporal data.",
        "name9": "Ester Dantas Reis Nunes",
        "desc9": "Ester Reis, is a history student at EFLCH/UNIFESP, FAPESP scholarship about the use of the Geographic Information System (GIS) in historical research.",
        "name10": "Denis Taveira de Lima",
        "desc10": "Denis Taveira is a student of Computer Engineering at UNIFESP and a fellowship of Scientific Initiation at INPE by FAPESP. He is one of the responsible to development of the web platform of Pauliceia 2.0.",
        "name11": "Fernando Atique",
        "desc11": "Fernando Atique is Architect and Town Planner. Professor of History, Space and Built Heritage at EFLCH/UNIFESP. He contributed with spatial and historical data with the project.",
        "name12": "Eduardo de Souza Goiabeira",
        "desc12": "Eduardo Goiabeira holds a degree in History from EFLCH/UNIFESP. He contributed to the creation of the project numbering database.",
        "name13": "Jeffrey Lesser",
        "desc13": "Jeffrey Lesser is a historian of Brazil and the Director of the Halle Institute for Global Research at Emory University, the international partner for the Project supported by FAPESP.",
        "name14": "Gabriel Sansigolo",
        "desc14": "Gabriel Sansigolo is taking master's degree in Applied Computation by the National Institute of Space Research. Technologist in Analysis and Development of Systems. Has IT Technician for Internet.",
        "name15": "Luanna M. do Nascimento",
        "desc15": "Luanna Nascimento is majoring History at UNIFESP and has a research scholarship given by FAPESP to the Project Pauliceia 2.0.",
        "name16": "Gilberto Ribeiro de Queiroz",
        "desc16": "Gilberto is an Associate Professor of Geoinformatics at INPE with a PhD in Applied Computing. In the Pauliceia 2.0 project he is involved with the conceptual design of the computational platform.",
        "name17": "Monaliza Caetano",
        "desc17": "Monaliza Caetano, is a historian, graduated in Federal University of São Paulo. She is one of the scholarship of the Project supported by FAPESP.",
        "name18": "Nandamudi Vijaykumar",
        "desc18": "N. L. Vijaykumar (Vijay) has experience in Software Engineering, Model Based Testing and Performance Evaluation. He is retired and Voluntary Collaborator at the Laboratory of Computing and Applied Mathematics (LAC) of the National Institute for Space Research (INPE).",
        "name19": "Orlando Guarnier Farias",
        "desc19": "Orlando Guarnier is an history student from EFLCH/UNIFESP and member of Hímaco group.",
        "name20": "Rodrigo Mariano",
        "desc20": "Rodrigo Mariano is Systems Analyst and Developer, and a master in Applied Computing by INPE in the area of Geocomputing. His main activity in the project is the development of the platform's data management service, since the user control, layers, spatio-temporal data manipulation, to the control of notifications and denunciations.",
        "name21": "Priscila Machado Meireles",
        "desc21": "Priscila Meireles is Architect and Urbanist, Specialist in Graphic Design. As a collaborator of the project she developed the Visual Identity elements, which include the creation of the \"Pauliceia 2.0\" brand, as well as web design: website and platform.",
        "name22": "Thomas Rogers",
        "desc22": "Thomas Rogers is Associate Professor of History at Emory University. He was co-coordinator of the FAPESP SPRINT grant that connected Emory to UNIFESP for Pauliceia 2.0.",
        "name23": "Vitória Martins Fontes da Silva",
        "desc23": "Vitória Martins Fontes has a degree in history from UNIFESP. She participates in the activities of the Hímaco group and since 2018 she has been part of the Pauliceia 2.0 development team. In the project, she was part of the group responsible for the database of the platform numbering and currently produces support material for the use of Pauliceia and is part of the group that implements the Bom Retiro region.",
        "name24": "Wania Mazzarello",
        "desc24": "Wania has a degree in history. She acts as a researcher, consultant and teacher. Has a research interest in urban history, identity, memory and technology. In the Project, he acts in the team that makes possible the introduction of the Pari area in the scope of the platform.",
        "name25": "Gabriel dos Reis",
        "desc25": "Gabriel dos Reis is majoring in Analysis and Systems Development at the Federal Institute of Bahia. Having joined the Project in an experiment in the year 2020, he seeks to assist Pauliceia in the aspects he can, whether they are computational or not.",
        "name26": "Karla Donato Fook - coordinator",
        "desc26": "Karla Donato Fook is professor at Aeronautics Institute of Technology (ITA). Her research interests include Geoinformatics and Software Engineering. In the Pauliceia 2.0 project she is involved with the management of the computational platform.",
        "name27": "Aracele Torres",
        "desc27": "Aracele Torres holds a PhD in History from USP (University of Sao Paulo), working in the area of History of Science and Technology, focusing on open sciences and technologies. She is a member of Hímaco (History, Maps and Computers) and lab.hum (Laboratory of Digital Humanities) at UNIFESP/Guarulhos. She makes technical contributions to the project, in addition to contributing as a researcher.",
        "name28": "Raphael Augusto de Oliveira Silva",
        "desc28": "Raphael Augusto de Oliveira Silva has a degree in History from UNIFESP. He is currently a Computer Engineering student at UNIVESP. Your contributions are both for the maintenance of the Portal as well as for the development of research.",

    },
    "register": {
        "title": "Register",
        "lbName": "Name",
        "lbEmail": "Email address",
        "lbUsername": "Username",
        "lbPassword": "Password",
        "lbCheckNotification": "Receive notification by email",
        "lbCheckAgree": "I agree to the terms of use.",
        "lbReadme": "read the terms here",
        "btnTitle": "Register",
        "lbToLogin": "Are you already registered?",
        "lbToLoginLink": "CLICK HERE",
        "msg": {
            "registerBtnHover": "You must accept the Use Terms in order to register yourself!",
            "success": "Your registration is almost ready. Just access your email and follow the instructions.",
            "emptyField": "ERROR: complete all fields!",
            "err500": "Error internal server - contact your administrator",
            "err409": "<strong>email</strong> or <strong>username</strong> already exists in our system."
        }
    },
    "validEmail": {
        "msgSuccess": "Hello, your email was <strong>successfully</strong> validated! Now just <i>log in</i> to access the system.",
        "msgErr": "Error while validating your Email. Invalid link!"
    },
    "validSocial": {
        "msgSuccess": "WELCOME",
        "msgErr": "Error logging in. Invalid link!"
    },
    "map":{
        "geocoding": {
            "form":  {
                "search": "Look for an Address",
                "geocoding": "Search for an address via CSV"
            },
            "placeholder": "street name, number, year",
            "btnText": "Search",
            "popupInfo": {
                "search": `
                    To search for an address, write it in the following structure street name, number (just a number), year (just a number). <br><strong>Ex: rua da consolaçao, 42, 1931</strong>
                `,
                "geocoding": `
                    <b>1st Step:</b> Verify if the CSV file are following the rules.<br>
                    <b>Rules:</b> First header line, written addresses in first column, one per line, following structure street name , number, year<br>
                    <b>2nd Step:</b> Through the Browse button, selecting your CSV file, display the addresses found on the map.<br>
                    <b>3nd Step:</b> Through the Download button, it's possible to download the found data in Shapefile format.
                `
            },
            "label": {
                "title": "Label",
                "found": "Found",
                "geocoded": "Geocoded",
                "extrapolated": "Extrapolated"
            }
        },
        "sidebarLayer": {
            "title": "Layers",
            "btnAdd": "Add or remove layers",
            "options": {
                "zoom": "Zoom",
                "infosLayer": "Layer information",
                "infosVector": "Information about objects",
                "editColor": "Edit color",
                "download": "Download"
            },
            "msgEmpty": "Add layers to the view on the map!"
        },
        "sidebarEdit": {
            "title": "Edit"
        },
        "addLayer": {
            "title": "Add or remove layers",
            "input": "Search by theme, layer or author:",
            "close": "Close",
            "box": {
                "lbTitle": "TITLE",
                "lbAuthors": "AUTHORS",
                "lbKeywods": "KEYWORDS"
            },
            "btns": {
                "active": "Active",
                "disable": "Disable"
            },
            "msg": {
                "errTitle": "Internal Error",
                "errMsg": "Service not available, try again later or report our support!"
            }
        },
        "viewInfo": {
            "btnFollow": "Follow Layer",
            "btnUnFollow": "Unfollow Layer",
            "lbTitle": "TITLE",
            "lbDescription": "DESCRIPTION",
            "lbKeywods": "KEYWORDS",
            "lbAuthors": "AUTHORS",
            "lbDate": "CREATION DATE",
            "lbReferences": "REFERENCES",
            "lbNotifications": "Notifications"
        },
        "viewInfoVector": {
            "title": "Select Information",
            "btnFeature": "By location",
            "btnBox": "By region",
            "btnClean": "Clean"
        },
        "betaVersionModal": {
            "welcome": "Welcome to the `Pauliceia 2.0` platform",
            "betaVersion": "BETA VERSION (test phase)",
            "body": `
                    <p style="text-align: justify">
                        This is to inform that at the present moment, only a <b>beta version for testing purposes </b> is available within the Platform. <br>
                        Explore the map, investigate and include data. <br>
                        Any question, suggestion or error detected during the browsing,
                        it is kindly requested to report such error using the email in the Contacts tab.
                        This will enable the team to improve the tool. <br>
                        Moreover, if any problem is encountered, please also report it to the same email by describing the problem in details as well as attaching CSV, Shapefile,
                        image, screen shot or any other file used or expected to be used so that it will enable the team to track down the problem and take measures to duly correct it. It is recommended, if possible, to also add the date and time of when the problem occurred. <br>
                        As already mentioned, this version is under tests and many a time, the database may be wiped which will discontinue the work being conducted by the user as well as losing his or her data.
                        This is necessary in order to make the new functions compatible.
                        The team deeply regrets any inconvenience and hope that users understand the team’s efforts in developing a tool to the expectations of the users. <br>
                        The team duly acknowledges the users for their contributions.
                    </p>`,
            "footnote": "Pauliceia 2.0 team"
        }
    },
    "terms": {
        "title": "USE TERMS",
        "text": termsEN
    }
}
