# the connection was copied from mongo docs
from libs import *
uri = "mongodb+srv://sample:Poher_123@cluster0.zcsjtwf.mongodb.net/"
client = MongoClient(uri)
db = client['sample_mflix']
posts_col = db['posts']


# pprint.pprint(posts_col.find_one({"_id": 'ObjectId(647b76cd4917951656730bd2)'}))



# post = {
#   'author': 'Mom',
#   'address': 'PTZ'
# }

# post_id = posts_col.insert_one(post).inserted_id
# print(post_id)

# print(t)

# if "posts" in collist:
#   print("The collection exists.")


# try:
#   client.admin.command('ping')
#   print("Pinged your deployment. You successfully connected to MongoDB!")
# except Exception as e:
#   print(e)
