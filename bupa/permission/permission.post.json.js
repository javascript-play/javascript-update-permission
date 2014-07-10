(function(json, model, search){

    model.data = json;

    /**
    * Clear all node's permissons.
    * @param {Object} node - ScriptNode object.
    */
    function removeAllPermissions(ref) {
        //var roles = ["Coordinator", "Collaborator", "Contributor", "Editor", "Consumer"];
        var roles = ["Consumer", "Editor"];
        roles.forEach(function(role) {
            ref.removePermission(role);
        });
        //ref.save();
    }

    var data = json.getJSONArray("data");

    for(var j=0; j < data.length(); j++) {

        var item = data.getJSONObject(j);
        item.put("success", false);

        var uuid = item.get("uuid");
        var node = search.findNode("workspace://SpacesStore/" + uuid)

        if(node != undefined) {

            // remove all node permisson.
            removeAllPermissions(node);

            var permissions = item.getJSONArray("permissions");
            for (var i = 0; i < permissions.length(); i++) {
                var obj = permissions.getJSONObject(i);
                var group = obj.get("group");
                var permission = obj.get("permission");
                node.setPermission(permission, "GROUP_" + group);
            }

            // append new properties.
            item.put("properties", node.properties);
            item.put("success", true);
            item.put("date", new Date());
        }
    }

})(json, model, search);
