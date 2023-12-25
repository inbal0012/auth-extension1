import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Flavor } from "./flavor.entity";

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable() // only the OWNER-side does this
    @ManyToMany(
      type => Flavor,
      flavor => flavor.coffees, // what is "coffee" within the Flavor Entity 
    )
    flavors: string[];
    }
  