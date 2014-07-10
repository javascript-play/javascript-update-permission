var http = require("http");

function createData() {
    var obj = {
        data: [
            {
                uuid: "f6461aed-4f46-446d-a950-5cb3e6fe9cc5",
                permissions: [
                    {
                        group: "wk1",
                        permission: "Coordinator"
                    },
                    {
                        group: "wk2",
                        permission: "Editor"
                    }
                ]
            },{
                uuid: "1452e35c-eb43-43f5-9977-b3e1e0d02111",
                permissions: [
                    {
                        group: "wk1",
                        permission: "Editor"
                    },
                    {
                        group: "wk2",
                        permission: "Editor"
                    }
                ]
            }
        ]
    };

    return obj;
}

exports.testSetPermission = function(test) {

    var host = "192.168.0.115";
    var path = "/ecm/service/kosystems/bupa/permission/update";

    var headers = {
        "Authorization": new Buffer("admin:admin").toString("base64"),
        "Content-Type": "application/json"
    };

    var options = {
        host: host,
        method: "POST",
        port: 8080,
        path: path,
        headers: headers
    };

    var request = http.request(options, function(response) {

        var datas = "";
        response.on("data", function(data){
            datas += data;
        });

        response.on("end", function(){
            var obj = JSON.parse(datas);
            var tree = function(x) { return JSON.stringify(x, null, 4); };
            console.log(tree(obj));

            if(response.statusCode == 500) test.fail();
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


