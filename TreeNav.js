class Main extends App
    {
        onStart()
        {
            // Creates a layout with objects verticaly centered.
            this.main = ui.addLayout( "main", "Linear", "VCenter,ScrollY", 1, 1 )

            // tree items object
            var items = {
                "Group 1": {
                    "Item 1": "",
                    "Item 2": "",
                    "Item 3": ""
                },
                "Group 2": {
                    "Item 1": "",
                    "Item 2": "",
                    "Item 3": ""
                },
                "Applications": {
                    "Editor": "",
                    "Productivity": "",
                    "Social Media": {
                        "TikTok": "",
                        "YouTube": "",
                        "Meta": {
                            "Facebook": "",
                            "Instagram": "",
                            "Whatsapp": "",
                            "Messenger": ""
                        }
                    }
                }
            }

            // Creates a TreeView Component and add it to the TreeView
            this.trv = ui.addTreeView( this.main, items, "Primary", 0.73, 0.7452 )

            // Add a on touch handler to the TreeView
            this.trv.setOnTouch( this.onTouch )
        }

        onTouch( value, path )
        {
            ui.showPopup( "Value: "+value + " Path: "+path )
        }
    }