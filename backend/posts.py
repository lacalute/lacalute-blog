from libs import *
from connection import *

@app.get('/posts')
async def get_all():
  all_posts = []
  for p in posts_col.find():
    p['_id'] = str(p['_id'])
    all_posts.append(p)
  return all_posts

@app.get('/post/{id}')
async def get_id(id):
  print(id)
  try:
    
    res = posts_col.find_one({'_id': ObjectId(id)})
    res['_id'] = str(res['_id'])
    return res
    # for search in posts_col.find():
    #   if str(search['_id']) == str(id):
    #     res = search
    #     res['_id'] = str(res['_id'])
    #     return res
  except:
    return "Error"
