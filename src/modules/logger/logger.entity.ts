import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('loggers')
export class Logger extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', name: 'raw_data', length: 500, nullable: false })
    rawData: string;

    @Column({ type: 'varchar', length: 100, nullable: false })
    action: string

    @Column({ type: 'varchar', length: 100, nullable: false })
    user: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
}