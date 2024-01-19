/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52yih5jzzcn17m8")

  // remove
  collection.schema.removeField("pjtempnw")

  // remove
  collection.schema.removeField("wfglkmza")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uutsik7v",
    "name": "sender",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xrv9i0qf",
    "name": "receiver",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52yih5jzzcn17m8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pjtempnw",
    "name": "sender",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wfglkmza",
    "name": "group",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "6il92gybb6y6ndj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("uutsik7v")

  // remove
  collection.schema.removeField("xrv9i0qf")

  return dao.saveCollection(collection)
})
