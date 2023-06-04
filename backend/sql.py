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

  def delete_post(self, title):
    post = {
      'title': title
    }
    posts_col.delete_one(post)


