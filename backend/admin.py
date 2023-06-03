from libs import *


@app.post('/admin')
async def admin(user: User):
  if user.login == admin_login and user.password == admin_password:
    return 'Fuck you'
  else:
    return False