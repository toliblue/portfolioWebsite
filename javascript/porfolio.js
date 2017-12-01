$(document).ready(function ( ) {
    
    
    
//material
    $("#concrete").click(function(){
        $(".concrete").show();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
        
    });
    
    $("#wood").click(function(){
        $(".concrete").hide();
        $(".wood").show();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
     });
    
    $("#digital").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").show();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
     });
    
    $("#paper").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").show();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
     });
    
    $("#resin").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").show();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
     });
    
    $("#metal").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").show();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
     });
    
    $("#fabric").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").show();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").hide();
    });
    
    $("#ceramic").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").show();
        $(".acrylic").hide();
        $(".other").hide();
     });

    $("#acrylic").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").show();
        $(".other").hide();
    });
    
    $("#other").click(function(){
        $(".concrete").hide();
        $(".wood").hide();
        $(".digital").hide();
        $(".paper").hide();
        $(".resin").hide();
        $(".metal").hide();
        $(".fabric").hide();
        $(".ceramic").hide();
        $(".acrylic").hide();
        $(".other").show();
    });
//medium
    
    $("#architecture").click(function(){
        $(".architecture").show();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").hide();
    });

    $("#sculpture").click(function(){
        $(".architecture").hide();
        $(".sculpture").show();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").hide();
    });

    $("#photography").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").show();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").hide();
    });
        
    $("#drawing").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").show();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").hide();
    });
        
    $("#graphicDesign").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").show();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").hide();
    });
        
    $("#motionGraphics").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").show();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").hide();
    });
        
    $("#3dPrinting").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").show();
        $(".rendering").hide();
        $(".other2").hide();
    });
        
    $("#rendering").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").show();
        $(".other2").hide();
    });
        
    $("#other2").click(function(){
        $(".architecture").hide();
        $(".sculpture").hide();
        $(".photography").hide();
        $(".drawing").hide();
        $(".graphicDesign").hide();
        $(".motionGraphics").hide();
        $(".3dPrinting").hide();
        $(".rendering").hide();
        $(".other2").show();
    });


//method    
    
    $("#rhino").click(function(){
        $(".rhino").show();
        $(".grasshopper").hide();
        $(".revit").hide();
        $(".htmlCssJava").hide();
        $(".handcraft").hide();
        $(".adobeSuite").hide();
        $(".other3").hide();
    });
          
    $("#grasshopper").click(function(){
        $(".rhino").hide();
        $(".grasshopper").show();
        $(".revit").hide();
        $(".htmlCssJava").hide();
        $(".handcraft").hide();
        $(".adobeSuite").hide();
        $(".other3").hide();
    });

    $("#revit").click(function(){
        $(".rhino").hide();
        $(".grasshopper").hide();
        $(".revit").show();
        $(".htmlCssJava").hide();
        $(".handcraft").hide();
        $(".adobeSuite").hide();
        $(".other3").hide();
    });

     $("#htmlCssJava").click(function(){
        $(".rhino").hide();
        $(".grasshopper").hide();
        $(".revit").hide();
        $(".htmlCssJava").show();
        $(".handcraft").hide();
        $(".adobeSuite").hide();
        $(".other3").hide();
    });   
    
    $("#handcraft").click(function(){
        $(".rhino").hide();
        $(".grasshopper").hide();
        $(".revit").hide();
        $(".htmlCssJava").hide();
        $(".handcraft").show();
        $(".adobeSuite").hide();
        $(".other3").hide();
    });

    $("#adobeSuite").click(function(){
        $(".rhino").hide();
        $(".grasshopper").hide();
        $(".revit").hide();
        $(".htmlCssJava").hide();
        $(".handcraft").hide();
        $(".adobeSuite").show();
        $(".other3").hide();
    });
        
    $("#other3").click(function(){
        $(".rhino").hide();
        $(".grasshopper").hide();
        $(".revit").hide();
        $(".htmlCssJava").hide();
        $(".handcraft").hide();
        $(".adobeSuite").hide();
        $(".other3").show();
    });
        
        

//show all
    
    $("#all").click(function(){
        $(".concrete").show();
        $(".wood").show();
        $(".digital").show();
        $(".paper").show();
        $(".resin").show();
        $(".metal").show();
        $(".fabric").show();
        $(".ceramic").show();
        $(".acrylic").show();
        $(".other").show();
        $(".architecture").show();
        $(".sculpture").show();
        $(".photography").show();
        $(".drawing").show();
        $(".graphicDesign").show();
        $(".motionGraphics").show();
        $(".3dPrinting").show();
        $(".rendering").show();
        $(".other2").show();
        $(".rhino").show();
        $(".grasshopper").show();
        $(".revit").show();
        $(".htmlCssJava").show();
        $(".handcraft").show();
        $(".adobeSuite").show();
        $(".other3").show();
        
    });

});




















