import {PrimaryColumn, UpdateDateColumn, CreateDateColumn, Column, Entity, Timestamp } from 'typeorm';
import {v4 as uuid} from 'uuid';

@Entity('urls')
export class UrlEntity {
  
  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
  @PrimaryColumn()
  readonly id: string

  @Column()
  fullUrl: string

  @Column()
  shortUrl: string

  @Column()
  visitQtd: number

  @Column()
  linkExpires: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}