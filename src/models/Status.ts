import { TweetObject } from '../services/Twitter'
import User from './User'

class Status implements TweetObject {
  public created_at: string
  public id_str: string
  public full_text: string
  public user: User

  public constructor (created_at: string, id_str: string, full_text: string, created_by: User) {
    this.created_at = created_at
    this.id_str = id_str
    this.full_text = full_text
    this.user = created_by
  }
}

export default Status
