var data = json.getJSONArray("data");
var jdata = data;
for(var j=0; j < data.length(); j++) {
    jdata.getJSONObject(j).put("success","false");
    var item = data.getJSONObject(j);
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
    }
    jdata.getJSONObject(j).put("properties",node.properties);
    jdata.getJSONObject(j).put("success","true");
}
model.data = json;
