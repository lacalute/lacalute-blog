from libs import *
from sql import *

@app.post('/create')
def create_post(post: Post):
  try:
    print("HELLO", post.title)
    crud = CRUD()
    crud.create_post(post.title, post.date, post.text)
    return "OK"
  except:
    return 'BAD'
  
@app.post('/delete')
async def delete_post(post: Post):
  try:
    crud = CRUD()
    crud.delete_post(post.id)
    return 'OK'
  except:
    return 'BAD'
  

