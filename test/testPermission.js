var http = require("http");

function createData() {
    var obj = {
        data: [
            {
                uuid: "0f968549-3553-4da2-b9d9-ac9e74fbddbe",
                permissions: [
                    {
                        group: "g1",
                        permission: "Editor"
                    },
                    {
                        group: "g2",
                        permission: "Consumer"
                    }
                ]
            },
            {
                uuid: "a75b4812-289b-4740-b77c-a9244998e79a",
                permissions: [
                    {
                        group: "g1",
                        permission: "Editor"
                    },
                    {
                        group: "g2",
                        permission: "Consumer"
                    }
                ]
            }
        ]
    };

    return obj;
}

exports.testSetPermission = function(test) {

    var headers = {
        "Authorization": new Buffer("admin:admin").toString("base64"),
        "Content-Type": "application/json"
    };

    var options = {
        host: "localhost",
        method: "POST",
        port: 8080,
        path: "/alfresco/service/kosystems/bupa/permission/update",
        headers: headers
    };

    var request = http.request(options, function(response) {
        if(response.statusCode != 200) {
            //test.fail();
        }

        var datas = "";
        response.on("data", function(data){
            datas += data;
        });

        response.on("end", function(){
            var obj = JSON.parse(datas);
            var tree = function(x) { return JSON.stringify(x, null, 4); };
            console.log(tree(obj));
            test.done();
        });
    });

    request.on("error", function(err){
        console.log(err);
        test.fail();
        test.done();
    });

    // start request here.
    var data = JSON.stringify(createData());
    request.write(data);
    request.end();
};


