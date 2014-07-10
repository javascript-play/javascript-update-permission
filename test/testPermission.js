var http = require("http");

function createData() {
    var obj = {
        data: [
            {
                uuid: "3e1f6685-1e7e-4577-9924-c6f9504379e1",
                permissions: [
                    {
                        group: "wk1",
                        permission: "Editor"
                    },
                    {
                        group: "wk2",
                        permission: "Consumer"
                    }
                ]
            },
            {
                uuid: "83ed57bd-cc47-4ff2-9f50-63d8868a4e1b",
                permissions: [
                    {
                        group: "wk1",
                        permission: "Editor"
                    },
                    {
                        group: "wk2",
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
        console.log(response.statusCode);

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


