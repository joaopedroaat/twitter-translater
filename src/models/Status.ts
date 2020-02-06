import User from './User'

class Status {
  public created_at: Date
  public id_str: string
  public full_text: string
  public user: User
  public url: string

  public constructor (created_at: Date, id_str: string, full_text: string, created_by: User) {
    this.created_at = created_at
    this.id_str = id_str
    this.full_text = full_text
    this.user = created_by
    this.generateURL()
  }

  private generateURL (): void {
    this.url = `https://twitter.com/${this.user.id}/status/${this.id_str}`
  }
}

export default Status
