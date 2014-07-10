(function(json, model, search){

    var data = json.getJSONArray("data");

    for(var j=0; j < data.length(); j++) {
        var item = data.getJSONObject(j);
        item.put("success", false);

        var uuid = item.get("uuid");
        var node = search.findNode("workspace://SpacesStore/" + uuid)

        if(node != undefined) {
            var permissions = item.getJSONArray("permissions");
            for (var i = 0; i < permissions.length(); i++) {
                var obj = permissions.getJSONObject(i);
                var group = obj.get("group");
                var permission = obj.get("permission");
                node.setPermission(permission, "GROUP_" + group);
            }
            item.put("properties", node.properties);
            item.put("success", true);
        }
    }

    model.data = json;

})(json, model, search);

//
//
