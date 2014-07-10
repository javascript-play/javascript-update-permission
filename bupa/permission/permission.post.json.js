/**
* Self invoking literal.
* This function depend on alfresco global object,
* - json
* - model
* - search
*/
(function(json, model, search){

    /**
    * Clear all node's permissons.
    * @param {Object} node - ScriptNode object.
    */
    function removeAllPermissions(ref) {
        var permissons = node.getDirectPermissions();
        for(var index in permissons) {
            var permission = permissons[index].split(";");
            var role = permission[2];
            var user = permission[1];
            node.removePermission(role, user);
        }

        /*
        var roles = ["Coordinator", "Collaborator", "Contributor", "Editor", "Consumer"];
        var roles = ["Editor"];
        roles.forEach(function(role) {
            ref.removePermission(role);
        });
        */
    }

    var data = json.getJSONArray("data");

    for(var j=0; j < data.length(); j++) {

        // read item at permisson j,
        // and put default status success to 'false'
        var item = data.getJSONObject(j);
        item.put("success", false);

        var uuid = item.get("uuid");
        var node = search.findNode("workspace://SpacesStore/" + uuid)

        if(node != undefined) {

            // keep current owner.
            // take owner by current user.
            // remove all previous permissions.
            var owner = node.getOwner();
            node.takeOwnership();
            removeAllPermissions(node);

            // real new permission from json object,
            // then update role and permission.
            var permissions = item.getJSONArray("permissions");
            for (var i = 0; i < permissions.length(); i++) {
                var obj = permissions.getJSONObject(i);
                var group = obj.get("group");
                var permission = obj.get("permission");
                node.setPermission(permission, "GROUP_" + group);
            }

            // recovery owner.
            node.setOwner(owner);

            // append new properties,
            // properties: addition node properties.
            // success: update status.
            // date: operation date.
            item.put("properties", node.properties);
            item.put("success", true);
            item.put("date", new Date());
        }
    }

    model.data = json;

})(json, model, search);
