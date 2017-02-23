var $ = go.GraphObject.make;

var myDiagram =
  	$(go.Diagram, "myDiagramDiv",
    {
        initialContentAlignment: go.Spot.Center,
        "toolManager.hoverDelay": 100,
        "undoManager.isEnabled": true, 
        layout: $(go.TreeLayout,
            { angle: 90, layerSpacing: 35 })
    });

function tooltipTextConverter(data) {
        var str = "";
        str = data.description;
        return str;
    }

    var tooltiptemplate =
        $(go.Adornment, "Auto",
            $(go.Shape, "Rectangle", { fill: "whitesmoke", stroke: "black" }),
            $(go.TextBlock, {
                    font: "bold 14px Helvetica, bold Arial, sans-serif",
                    wrap: go.TextBlock.WrapFit,
                    margin: 5
                },
                new go.Binding("text", "", tooltipTextConverter))
        );

myDiagram.nodeTemplate =
    $(go.Node, "Horizontal",
    	{ background: "#44CCFF" },
    		$(go.TextBlock, "Default Text",
      		{ margin: 12, stroke: "white", font: "bold 16px sans-serif" },
      		new go.Binding("text", "name"))
  	);

myDiagram.nodeTemplate =
        $(go.Node, "Auto", { deletable: false, toolTip: tooltiptemplate},
            new go.Binding("text", "name"),
            $(go.Shape, "RoundedRectangle",{fill:"#44CCFF"}),
            $(go.TextBlock, "Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
                new go.Binding("text", "name"))

        );

myDiagram.linkTemplate =
	$(go.Link,
    	{ routing: go.Link.Orthogonal, corner: 5 },
    	$(go.Shape, { strokeWidth: 3, stroke: "#555" }));

var model = $(go.TreeModel);
model.nodeDataArray =
[
	{ key: "1",              name: "Sunny Diamonds"},
	{ key: "2", parent: "1", name: "app", description: "Contains customized modules" },
	{ key: "3", parent: "1", name: "vendor", description: "Contains core modules" },
	{ key: "4", parent: "1", name: "pub", description: "Deploying static view files" },
	{ key: "5", parent: "1", name: "var", description: "Contains caches and generated classes" },
	{ key: "6", parent: "2", name: "code", description: "Create the component file structure" },
	{ key: "7", parent: "2", name: "design", description: "Describes the file structure of a Magento themes" },
	{ key: "8", parent: "3", name: "magento", },
	{ key: "9", parent: "8", name: "magento_theme",},
	{ key: "10", parent: "6", name: "sunny(vendor)" },
	{ key: "11", parent: "10", name: "modules" },
	{ key: "12", parent: "11", name: "controller", description: "Contains PHP controller classes" },
	{ key: "13", parent: "11", name: "model", description: "Contains PHP model classes" },
	{ key: "14", parent: "11", name: "view" , description: "Contains static view files, design templates" },
	{ key: "15", parent: "11", name: "helper" , description: "Contains common function for implementing controller" },
	{ key: "16", parent: "7", name: "adminhtml", description: "Contain Storefront themes" },
	{ key: "17", parent: "7", name: "frontend", description: "Contain Admin themes" },
	{ key: "18", parent: "17", name: "Sunny(vendor)" , description: "Customized modules" },
	{ key: "19", parent: "18", name: "Default" },
	{ key: "20", parent: "19", name: "Modules" , description: "Contain Admin themes" },
	{ key: "21", parent: "20", name: "Magento_Customer" , description: "Modules related to Magento_Customer"},
	{ key: "22", parent: "20", name: "Magento_Theme" },
	{ key: "23", parent: "20", name: "Magento_Sales" , description: "Modules related to sales"},
	{ key: "24", parent: "20", name: "Web" , description: "Optional directory that contains static files" },
	{ key: "25", parent: "22", name: "layout" },
	{ key: "26", parent: "22", name: "templates" , description: "Contains the phtml files" },
	{ key: "27", parent: "26", name: "default.xml" , description: "Defines page layout" },
	{ key: "28", parent: "26", name: "default_head_blocks.xml" , description: "Defines the scripts, images, and meta data included in pages" },
	{ key: "29", parent: "26", name: "html" },
	{ key: "30", parent: "24", name: "css", description: "Contains a theme’s less configuration files" },
	{ key: "31", parent: "24", name: "fonts" , description: "Contains different fonts for theme"},
	{ key: "32", parent: "24", name: "images" , description: "Static images folder" },
	{ key: "33", parent: "24", name: "js" , description: "Contains JavaScript files"}
];
myDiagram.model = model;