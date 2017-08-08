        //Core modules are already built in the node.js

        //This is the file system module built in node.js
        console.log('*******************')
        var fs = require('fs')

        //Create a file called Intro.
        //fs.writeFileSync("Intro","Hello World")

        //Read the file called Intro.
        //console.log(fs.readFileSync("Intro").toString());


        //Path in modue

        var path = require('path')

        var index = "E://Assembly/Source_Codes/Addressing.asm"
        console.log('*******************')
        console.log(path.normalize(index))
        console.log('This is the Directory name' + path.dirname(index))
        console.log('This is the Base name' + path.basename(index))
        console.log('This is the Extension ' + path.extname(index))
        console.log('*******************')
