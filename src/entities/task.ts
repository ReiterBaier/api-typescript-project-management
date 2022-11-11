import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  idMainTask: number

  @Column()
  idProject: number

  @Column()
  name: string

  @Column({name: "description", type: "longblob", nullable: false})
  description: Buffer 

  @Column()
  idClient: number

  @Column()
  idPlataform: number

  @Column()
  idType: number 

  @Column()
  idUser: number 

  @Column()
  idStatus: number

  @Column()
  creationDate: string 

  @Column({type: "date"})
  previousStartDate: string 

  @Column({type: "date"})
  startDate: string 

  @Column({type: "date"})
  previousConclusionDate: string 

  @Column({type: "date"})
  conclusionDate: string 

  @Column()
  estimateTime: number 
}

