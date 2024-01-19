/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "3r3m585667p89ob",
    "created": "2024-01-17 16:41:58.885Z",
    "updated": "2024-01-17 16:41:58.885Z",
    "name": "counters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sogpah7j",
        "name": "count",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("3r3m585667p89ob");

  return dao.deleteCollection(collection);
})
