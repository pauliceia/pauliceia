import termsEN from './termsEN'

export default {
    "nav": {
        "explore": "Explore",
        "about": "About",
        "login": "Sign In",
        "profile": "My Profile",
        "dashboard": "Dashboard",
        "logout": "Logout",
        "msgLogout": "bye bye see you!"
    },
    "dashboard": {
        "nav": {
            "home": "Home",
            "infos": "Information",
            "newLayer": "New Layer",
            "keywords": "keywords",
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
            "add": "Add",
            "submit": "Submit",
            "fileInput": "File Input",
            "zipFile": "ZIP File",
            "nameD": "Layer name. It is unique in the system.",
            "keywordsD": "Keyword is a tag/label related to the layer, which indicates what type it belongs, such as streets, addresses, crimes and so on.",
            "collaboratorsD": "Collaborators are the people who can add, edit or remove the vectors from the layer. Vectors are the geometries from the layer, such as a point, line, or polygon.",
            "descriptionD": "Description is a description/information about the layer.",
            "referenceD": "Reference is the source of that data, whether it is from a book, article, dissertation or so on. It should be in the ABNT format.",
            "epsgD": "It is the projection of the Shapefile, a integer number, for example 4326",
            "fileInputD": "The file that will be inserted is a ZIP compressed file that contains the Shapefile to be sent. Inside this ZIP file should contains all the files of a Shapefile, such as “.shp“, “.prj“, “.dbf“ and so on.",
            "chooseFile": "Choose file",
            "temporalColumns": "Temporal Columns",
            "startDate": "Start date of the temporal bounding box of the layer. This is the start date of the period that covers the layer data. For example: the layer has the period from 01-01-1900 to 31-12-1930. Hence the start date is 01-01-1900.",
            "endDate": "End date of the temporal bounding box of the layer. This is the end date of the period that covers the layer data. For example: the layer has the period from 01-01-1900 to 31-12-1930. Therefore the end date is 31-12-1930.",
            "startDateColumn": "It indicates which column contains the start date of the layer.",
            "endDateColumn": "It indicates which column contains the end date of the layer.",
            "startDateMask": "It indicates which mask is used by the start date of the layer.",
            "endDateMask": "It indicates which mask is used by the end date of the layer."
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
            "success": "your registration is almost ready. Just access your email and follow the instructions.",
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
            "label":  {
                "search": "Search address",
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
            }
        },
        "sidebarLayer": {
            "title": "Layers",
            "btnAdd": "Add and remove layers",
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
            "title": "Add and remove layers",
            "input": "Search by theme, layer or author:",
            "close": "Close",
            "box": {
                "lbTitle": "TITLE",
                "lbAuthors": "AUTHORS",
                "lbTags": "TAGS"
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
            "lbDescription": "DESCRIPTION",
            "lbTags": "TAGS",
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
        }
    },
    "terms": {
        "title": "USE TERMS",
        "text": termsEN
    }
}
