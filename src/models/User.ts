import { TwitterUser } from '../services/Twitter'

class User implements TwitterUser {
  public id: number
  public name: string
  public screen_name: string

  public constructor (id: number, name: string, screen_name: string) {
    this.id = id
    this.name = name
    this.screen_name = screen_name
  }
}

export default User
