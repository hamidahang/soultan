Content.makeFrontInterface(1000, 750);

//Grab control references
const var NUM_TABS = 5;
const var panels = [];
const var ComboBox1 = Content.getComponent("ComboBox1");
ComboBox1.setControlCallback(changeTab);

for (i = 0; i < NUM_TABS; i++)
{
    panels[i] = Content.getComponent("Panel"+(i+1));
}

//Tab button callback function
inline function changeTab(component, value)
{    
    //Toggle panels
    for (i = 0; i < panels.length; i++)
    {
        panels[i].showControl(i == value-1);
    }
}

// Load Prev. & Next Presets
const btnPreset = Content.getAllComponents("btnPreset\\d");

for (x in btnPreset)
	x.setControlCallback(onbtnPresetControl);
	
inline function onbtnPresetControl(component, value)
{
		local index = btnPreset.indexOf(component);

		if (!value)
			return;
			
		if (!index)
			Engine.loadPreviousUserPreset(false);
		else
			Engine.loadNextUserPreset(false);
}

// set all white keys between 24 and 127 to different color
for (i = 24; i <= 127; i++)
{
    if ((i % 12) == 0 || (i % 12) == 2 || (i % 12) == 4 ||
        (i % 12) == 5 || (i % 12) == 7 || (i % 12) == 9 ||
        (i % 12) == 11)
    {
        // White keys
        Engine.setKeyColour(i, 0xFFFFFFFF);
    }
}

// set all black keys between 24 and 127 to different color
for (i = 24; i <= 127; i++)
{
    if ((i % 12) == 1 || (i % 12) == 3 || (i % 12) == 6 ||
        (i % 12) == 8 || (i % 12) == 10)
    {
        // black keys
        Engine.setKeyColour(i, 0xE60F0C08);
    }
}

// Helper function to set background image and paint routine
inline function setPanelBackground(componentName, imagePath, imageId)
{
    local panel = Content.getComponent(componentName);

    panel.loadImage(imagePath, imageId);

    // Store the imageId as a custom property on the component
    panel.data.imageId = imageId;

    panel.setPaintRoutine(function(g)
    {
        var area = this.getLocalBounds(0);
        g.drawImage(this.data.imageId, area, 0, 0); // Use the stored value
    });
}

setPanelBackground("pnlBackground", "{PROJECT_FOLDER}soultan_synth_bkgrnd_1000x750_blk_1.png","synthBkgrnd");
//setPanelBackground("Panel1", "{PROJECT_FOLDER}panel_bkgrnd_800x371_gld.png", "panelBkgrnd");
//setPanelBackground("pnlOscillator", "{PROJECT_FOLDER}synth_bkgrnd_1000x750_blkpln.png", "panelBkgrnd");
//setPanelBackground("pnlOscillator1", "{PROJECT_FOLDER}panel_bkgrnd_161x322_gld.png", "panelBkgrnd");

// Add more panels easily
// setPanelBackground("Panel2", "{PROJECT_FOLDER}panel2.png", "panel2Img");

function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 