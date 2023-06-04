from libs import *
from connection import *

class CRUD:
  def create_post(self, title, date, text):
    post = {
      'title': title, 
      'date': date,
      'text': text
    }
    posts_col.insert_one(post)

  def delete_post(self, id):
    post = {
      '_id': ObjectId(id)
    }
    posts_col.delete_one(post)


