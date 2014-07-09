### Request.
``` sh
Url: http://localhost:8080/alfresco/service/kosystems/bupa/permission/update
Method: POST
Content-Type: application/json
```

### Request body.

``` json
{"data" = [
{
  "uuid": "22123130-c3f4-471b-9df2-3ce26ed5519a",
  "permissions":[
    {
      "group":"g1",
      "permission":"Editor"
    },
    {
      "group":"g2",
      "permission":"Consumer"
    }
    ]
},{
  "uuid": "785d4920-2292-414d-b469-218de115cfe7",
  "permissions":[
    {
      "group":"g1",
      "permission":"Consumer"
    },
    {
      "group":"g2",
      "permission":"Consumer"
    }
    ]
}
];}
```

### Respose body.

``` json
{
    "data": [
        {
            "permissions": [
                {
                    "permission": "Editor",
                    "group": "g1"
                },
                {
                    "permission": "Consumer",
                    "group": "g2"
                }
            ],
            "properties": {
                "{http://www.alfresco.org/model/content/1.0}name": "Main3",
                "{http://www.alfresco.org/model/content/1.0}creator": "admin",
                "{http://www.alfresco.org/model/content/1.0}modified": "org.mozilla.javascript.NativeDate@1163f8a5",
                "{http://www.alfresco.org/model/application/1.0}icon": "space-icon-default",
                "{http://www.alfresco.org/model/system/1.0}locale": "en_US",
                "{http://www.alfresco.org/model/system/1.0}store-protocol": "workspace",
                "{http://www.alfresco.org/model/content/1.0}created": "org.mozilla.javascript.NativeDate@3a59218e",
                "{http://www.alfresco.org/model/system/1.0}store-identifier": "SpacesStore",
                "{http://www.alfresco.org/model/content/1.0}title": "",
                "{http://www.alfresco.org/model/system/1.0}node-dbid": 33352,
                "{http://www.alfresco.org/model/system/1.0}node-uuid": "22123130-c3f4-471b-9df2-3ce26ed5519a",
                "{http://www.alfresco.org/model/content/1.0}modifier": "admin",
                "{http://www.alfresco.org/model/content/1.0}description": ""
            },
            "uuid": "22123130-c3f4-471b-9df2-3ce26ed5519a",
            "success": "true"
        },
        {
            "permissions": [
                {
                    "permission": "Consumer",
                    "group": "g1"
                },
                {
                    "permission": "Consumer",
                    "group": "g2"
                }
            ],
            "properties": {
                "{http://www.alfresco.org/model/content/1.0}name": "Main4",
                "{http://www.alfresco.org/model/content/1.0}creator": "admin",
                "{http://www.alfresco.org/model/content/1.0}modified": "org.mozilla.javascript.NativeDate@31aa0f8f",
                "{http://www.alfresco.org/model/application/1.0}icon": "space-icon-default",
                "{http://www.alfresco.org/model/system/1.0}locale": "en_US",
                "{http://www.alfresco.org/model/system/1.0}store-protocol": "workspace",
                "{http://www.alfresco.org/model/content/1.0}created": "org.mozilla.javascript.NativeDate@13e38ec2",
                "{http://www.alfresco.org/model/system/1.0}store-identifier": "SpacesStore",
                "{http://www.alfresco.org/model/content/1.0}title": "",
                "{http://www.alfresco.org/model/system/1.0}node-dbid": 33361,
                "{http://www.alfresco.org/model/system/1.0}node-uuid": "785d4920-2292-414d-b469-218de115cfe7",
                "{http://www.alfresco.org/model/content/1.0}modifier": "admin",
                "{http://www.alfresco.org/model/content/1.0}description": ""
            },
            "uuid": "785d4920-2292-414d-b469-218de115cfe7",
            "success": "true"
        }
    ]
}
```