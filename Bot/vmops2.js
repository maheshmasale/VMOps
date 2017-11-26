var Botkit = require('botkit');
var cmd=require('node-cmd');
fs = require('fs');
//var mockup_data = null;
fs.readFile('./../Mockups/mockup.json','utf8',function(err,data){
    if (err){
        console.log(err);
    }
    var mockup_data = data;
    mockup_json = JSON.parse(mockup_data);
});

function ansiblecommand(rawtext, callback){
    // program logic to execute ansible command and return the output in user understandable form.
    //get data from mockup file and send it over to callback.

    command = "ansible "+rawtext.slice(12,15)+ " -i ~/inventory  -a " + "'"+rawtext.slice(16)+"'",
    console.log(command)
    cmd.get(
        command,
        function(err, data, stderr){
            console.log(data)
            callback(data)
        }
    ); 
}
exports.ansiblecommand = ansiblecommand;

function merged_version(rawtext,callback){
    //console.log(mockup_json.usecase[2].result.output)
    //console.log(rawtext);
     
    command = "ansible " + rawtext.slice(15,18)+":"+rawtext.slice(19,22) +" -i ~/inventory -m shell -a 'cat /var/log/apt/history.log | grep Commandline | grep \"apt-get install\" | cut -d \" \" -f 4'"
    cmd.get(
        command,
        function(err, data, stderr){
            console.log(data)
            callback(data)
        }
    );
    //callback(cumulative+vm1+vm2);
}
module.exports.merged_version = merged_version;

function merge(rawtext,callback){
    callback(mockup_json.usecase[3].result.output)    
}
module.exports.merge = merge;

function list_shrinkable(rawtext,callback){
    callback(mockup_json.usecase[4].result.output)   
}
module.exports.list_shrinkable = list_shrinkable;
function shrinked_version(rawtext,callback){
        callback(mockup_json.usecase[5].result.output);    
}
exports.shrinked_version = shrinked_version;
function shrink(rawtext,callback){
        callback(mockup_json.usecase[6].result.output);  
}
exports.shrink = shrink;
