(function(json, model, search){

    model.data = json;

    /**
    * Clear all node's permissons.
    * @param {Object} node - ScriptNode object.
    */
    function removeAllPermissions(ref) {
        var permissons = node.getDirectPermissions();
        for(var index in permissons) {
            var permission = permissons[index].split(";");
            var role = permisson[2];
            var user = permisson[1];
            node.removePermission(role, user);
        }

        //var roles = ["Coordinator", "Collaborator", "Contributor", "Editor", "Consumer"];
        /*
        var roles = ["Editor"];
        roles.forEach(function(role) {
            ref.removePermission(role);
        });
        */
    }

    var data = json.getJSONArray("data");

    for(var j=0; j < data.length(); j++) {

        var item = data.getJSONObject(j);
        item.put("success", false);

        var uuid = item.get("uuid");
        var node = search.findNode("workspace://SpacesStore/" + uuid)

        if(node != undefined) {

            var owner = node.getOwner();
            node.takeOwnership();

            // remove all node permisson.
            removeAllPermissions(node);

            var permissions = item.getJSONArray("permissions");
            for (var i = 0; i < permissions.length(); i++) {
                var obj = permissions.getJSONObject(i);
                var group = obj.get("group");
                var permission = obj.get("permission");
                node.setPermission(permission, "GROUP_" + group);
            }

            node.setOwner(owner);

            // append new properties.
            item.put("properties", node.properties);
            item.put("success", true);
            item.put("date", new Date());
        }
    }

})(json, model, search);
