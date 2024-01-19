/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52yih5jzzcn17m8")

  // remove
  collection.schema.removeField("xrv9i0qf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("52yih5jzzcn17m8")

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
})
