import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@InputType('CharacterInput')
export class CharacterInput {
  @Field({ nullable: true })
  name?: string;

  @Field(() => [String],{ nullable: true })
  rank?: string[];

  @Field(() => [String],{ nullable: true })
  village?: string[];
}
