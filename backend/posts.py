from libs import *
from connection import *

@app.get('/posts')
async def get_all():
  all_posts = []
  for p in posts_col.find():
    all_posts.append(dict({'id': str(p['_id']), 'author': p['author']}))
  return all_posts

@app.get('/post/{id}')
async def get_id(id):
  result = []
  try:
    for search in posts_col.find():
      if str(search['_id']) == str(id):
        result.append(search)
        result[0]['_id'] = str(result[0]['_id'])
        return result
    return "Not Found"
  except:
    return "Error"
