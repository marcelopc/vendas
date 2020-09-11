import PouchDB from 'pouchdb-core';
import adapter from 'pouchdb-adapter-asyncstorage';

PouchDB.plugin(adapter);
const DB = new PouchDB('db', {adapter: 'asyncstorage', location: 'default', revs_limit: 0, auto_compaction: true});

export const GetDB = function(){
	return DB;
}

export const GetData = function(){
	return DB.get('db');
}

export const GetAllDocs = function(){
	return DB.allDocs({
		include_docs: true,
		attachments: true
	})
}

export const SaveData = function(document){
	return new Promise ((resolve, reject)=>{
		return DB.get('db').then((doc)=> {

			return DB.put({
				_id: 'db',
				_rev: doc._rev,
				document
			}).then(()=>resolve({
				_id: 'db',
				_rev: doc._rev,
				document
			})).catch(error=>reject(error));


		}).catch((err)=> {

			return DB.put({
				_id: 'db',
				document
			}).then(()=>resolve({
				_id: 'db',
				document
			})).catch(error=>reject(error));

		});
	});


}

export default {
	GetDB,
	GetData,
	GetAllDocs,
	SaveData
}
