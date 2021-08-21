import { gql } from '@urql/vue';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "chat_message" */
export type Chat_Message = {
  __typename?: 'chat_message';
  /** An object relationship */
  chat_room: Chat_Room;
  chat_room_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "chat_message" */
export type Chat_Message_Aggregate = {
  __typename?: 'chat_message_aggregate';
  aggregate?: Maybe<Chat_Message_Aggregate_Fields>;
  nodes: Array<Chat_Message>;
};

/** aggregate fields of "chat_message" */
export type Chat_Message_Aggregate_Fields = {
  __typename?: 'chat_message_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Message_Max_Fields>;
  min?: Maybe<Chat_Message_Min_Fields>;
};


/** aggregate fields of "chat_message" */
export type Chat_Message_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Message_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_message" */
export type Chat_Message_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Message_Max_Order_By>;
  min?: Maybe<Chat_Message_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_message" */
export type Chat_Message_Arr_Rel_Insert_Input = {
  data: Array<Chat_Message_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Message_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_message". All fields are combined with a logical 'AND'. */
export type Chat_Message_Bool_Exp = {
  _and?: Maybe<Array<Chat_Message_Bool_Exp>>;
  _not?: Maybe<Chat_Message_Bool_Exp>;
  _or?: Maybe<Array<Chat_Message_Bool_Exp>>;
  chat_room?: Maybe<Chat_Room_Bool_Exp>;
  chat_room_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_message" */
export enum Chat_Message_Constraint {
  /** unique or primary key constraint */
  ChatMessagePkey = 'chat_message_pkey'
}

/** input type for inserting data into table "chat_message" */
export type Chat_Message_Insert_Input = {
  chat_room?: Maybe<Chat_Room_Obj_Rel_Insert_Input>;
  chat_room_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chat_Message_Max_Fields = {
  __typename?: 'chat_message_max_fields';
  chat_room_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chat_message" */
export type Chat_Message_Max_Order_By = {
  chat_room_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Message_Min_Fields = {
  __typename?: 'chat_message_min_fields';
  chat_room_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chat_message" */
export type Chat_Message_Min_Order_By = {
  chat_room_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "chat_message" */
export type Chat_Message_Mutation_Response = {
  __typename?: 'chat_message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Message>;
};

/** on conflict condition type for table "chat_message" */
export type Chat_Message_On_Conflict = {
  constraint: Chat_Message_Constraint;
  update_columns?: Array<Chat_Message_Update_Column>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_message". */
export type Chat_Message_Order_By = {
  chat_room?: Maybe<Chat_Room_Order_By>;
  chat_room_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: chat_message */
export type Chat_Message_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_message" */
export enum Chat_Message_Select_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "chat_message" */
export type Chat_Message_Set_Input = {
  chat_room_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "chat_message" */
export enum Chat_Message_Update_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "chat_room" */
export type Chat_Room = {
  __typename?: 'chat_room';
  /** An array relationship */
  chat_messages: Array<Chat_Message>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Message_Aggregate;
  /** fetch data from the table: "chat_room_xref_users" */
  chat_room_xref_users: Array<Chat_Room_Xref_Users>;
  /** An aggregate relationship */
  chat_room_xref_users_aggregate: Chat_Room_Xref_Users_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
};


/** columns and relationships of "chat_room" */
export type Chat_RoomChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


/** columns and relationships of "chat_room" */
export type Chat_RoomChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


/** columns and relationships of "chat_room" */
export type Chat_RoomChat_Room_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};


/** columns and relationships of "chat_room" */
export type Chat_RoomChat_Room_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};

/** aggregated selection of "chat_room" */
export type Chat_Room_Aggregate = {
  __typename?: 'chat_room_aggregate';
  aggregate?: Maybe<Chat_Room_Aggregate_Fields>;
  nodes: Array<Chat_Room>;
};

/** aggregate fields of "chat_room" */
export type Chat_Room_Aggregate_Fields = {
  __typename?: 'chat_room_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Room_Max_Fields>;
  min?: Maybe<Chat_Room_Min_Fields>;
};


/** aggregate fields of "chat_room" */
export type Chat_Room_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Room_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "chat_room". All fields are combined with a logical 'AND'. */
export type Chat_Room_Bool_Exp = {
  _and?: Maybe<Array<Chat_Room_Bool_Exp>>;
  _not?: Maybe<Chat_Room_Bool_Exp>;
  _or?: Maybe<Array<Chat_Room_Bool_Exp>>;
  chat_messages?: Maybe<Chat_Message_Bool_Exp>;
  chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_room" */
export enum Chat_Room_Constraint {
  /** unique or primary key constraint */
  ChatRoomNameKey = 'chat_room_name_key',
  /** unique or primary key constraint */
  ChatRoomPkey = 'chat_room_pkey'
}

/** input type for inserting data into table "chat_room" */
export type Chat_Room_Insert_Input = {
  chat_messages?: Maybe<Chat_Message_Arr_Rel_Insert_Input>;
  chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chat_Room_Max_Fields = {
  __typename?: 'chat_room_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Chat_Room_Min_Fields = {
  __typename?: 'chat_room_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "chat_room" */
export type Chat_Room_Mutation_Response = {
  __typename?: 'chat_room_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Room>;
};

/** input type for inserting object relation for remote table "chat_room" */
export type Chat_Room_Obj_Rel_Insert_Input = {
  data: Chat_Room_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Room_On_Conflict>;
};

/** on conflict condition type for table "chat_room" */
export type Chat_Room_On_Conflict = {
  constraint: Chat_Room_Constraint;
  update_columns?: Array<Chat_Room_Update_Column>;
  where?: Maybe<Chat_Room_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_room". */
export type Chat_Room_Order_By = {
  chat_messages_aggregate?: Maybe<Chat_Message_Aggregate_Order_By>;
  chat_room_xref_users_aggregate?: Maybe<Chat_Room_Xref_Users_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: chat_room */
export type Chat_Room_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_room" */
export enum Chat_Room_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "chat_room" */
export type Chat_Room_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "chat_room" */
export enum Chat_Room_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "chat_room_xref_users" */
export type Chat_Room_Xref_Users = {
  __typename?: 'chat_room_xref_users';
  /** An object relationship */
  chat_room: Chat_Room;
  chat_room_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Aggregate = {
  __typename?: 'chat_room_xref_users_aggregate';
  aggregate?: Maybe<Chat_Room_Xref_Users_Aggregate_Fields>;
  nodes: Array<Chat_Room_Xref_Users>;
};

/** aggregate fields of "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Aggregate_Fields = {
  __typename?: 'chat_room_xref_users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Chat_Room_Xref_Users_Max_Fields>;
  min?: Maybe<Chat_Room_Xref_Users_Min_Fields>;
};


/** aggregate fields of "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Chat_Room_Xref_Users_Max_Order_By>;
  min?: Maybe<Chat_Room_Xref_Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Arr_Rel_Insert_Input = {
  data: Array<Chat_Room_Xref_Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Chat_Room_Xref_Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_room_xref_users". All fields are combined with a logical 'AND'. */
export type Chat_Room_Xref_Users_Bool_Exp = {
  _and?: Maybe<Array<Chat_Room_Xref_Users_Bool_Exp>>;
  _not?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
  _or?: Maybe<Array<Chat_Room_Xref_Users_Bool_Exp>>;
  chat_room?: Maybe<Chat_Room_Bool_Exp>;
  chat_room_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_room_xref_users" */
export enum Chat_Room_Xref_Users_Constraint {
  /** unique or primary key constraint */
  ChatRoomXrefUsersPkey = 'chat_room_xref_users_pkey'
}

/** input type for inserting data into table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Insert_Input = {
  chat_room?: Maybe<Chat_Room_Obj_Rel_Insert_Input>;
  chat_room_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chat_Room_Xref_Users_Max_Fields = {
  __typename?: 'chat_room_xref_users_max_fields';
  chat_room_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Max_Order_By = {
  chat_room_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Room_Xref_Users_Min_Fields = {
  __typename?: 'chat_room_xref_users_min_fields';
  chat_room_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Min_Order_By = {
  chat_room_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Mutation_Response = {
  __typename?: 'chat_room_xref_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Room_Xref_Users>;
};

/** on conflict condition type for table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_On_Conflict = {
  constraint: Chat_Room_Xref_Users_Constraint;
  update_columns?: Array<Chat_Room_Xref_Users_Update_Column>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_room_xref_users". */
export type Chat_Room_Xref_Users_Order_By = {
  chat_room?: Maybe<Chat_Room_Order_By>;
  chat_room_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: chat_room_xref_users */
export type Chat_Room_Xref_Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "chat_room_xref_users" */
export enum Chat_Room_Xref_Users_Select_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "chat_room_xref_users" */
export type Chat_Room_Xref_Users_Set_Input = {
  chat_room_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "chat_room_xref_users" */
export enum Chat_Room_Xref_Users_Update_Column {
  /** column name */
  ChatRoomId = 'chat_room_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "chat_message" */
  delete_chat_message?: Maybe<Chat_Message_Mutation_Response>;
  /** delete single row from the table: "chat_message" */
  delete_chat_message_by_pk?: Maybe<Chat_Message>;
  /** delete data from the table: "chat_room" */
  delete_chat_room?: Maybe<Chat_Room_Mutation_Response>;
  /** delete single row from the table: "chat_room" */
  delete_chat_room_by_pk?: Maybe<Chat_Room>;
  /** delete data from the table: "chat_room_xref_users" */
  delete_chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Mutation_Response>;
  /** delete single row from the table: "chat_room_xref_users" */
  delete_chat_room_xref_users_by_pk?: Maybe<Chat_Room_Xref_Users>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "chat_message" */
  insert_chat_message?: Maybe<Chat_Message_Mutation_Response>;
  /** insert a single row into the table: "chat_message" */
  insert_chat_message_one?: Maybe<Chat_Message>;
  /** insert data into the table: "chat_room" */
  insert_chat_room?: Maybe<Chat_Room_Mutation_Response>;
  /** insert a single row into the table: "chat_room" */
  insert_chat_room_one?: Maybe<Chat_Room>;
  /** insert data into the table: "chat_room_xref_users" */
  insert_chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Mutation_Response>;
  /** insert a single row into the table: "chat_room_xref_users" */
  insert_chat_room_xref_users_one?: Maybe<Chat_Room_Xref_Users>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "chat_message" */
  update_chat_message?: Maybe<Chat_Message_Mutation_Response>;
  /** update single row of the table: "chat_message" */
  update_chat_message_by_pk?: Maybe<Chat_Message>;
  /** update data of the table: "chat_room" */
  update_chat_room?: Maybe<Chat_Room_Mutation_Response>;
  /** update single row of the table: "chat_room" */
  update_chat_room_by_pk?: Maybe<Chat_Room>;
  /** update data of the table: "chat_room_xref_users" */
  update_chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Mutation_Response>;
  /** update single row of the table: "chat_room_xref_users" */
  update_chat_room_xref_users_by_pk?: Maybe<Chat_Room_Xref_Users>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Chat_MessageArgs = {
  where: Chat_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Message_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_RoomArgs = {
  where: Chat_Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Room_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_Room_Xref_UsersArgs = {
  where: Chat_Room_Xref_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Room_Xref_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_Chat_MessageArgs = {
  objects: Array<Chat_Message_Insert_Input>;
  on_conflict?: Maybe<Chat_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Message_OneArgs = {
  object: Chat_Message_Insert_Input;
  on_conflict?: Maybe<Chat_Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_RoomArgs = {
  objects: Array<Chat_Room_Insert_Input>;
  on_conflict?: Maybe<Chat_Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Room_OneArgs = {
  object: Chat_Room_Insert_Input;
  on_conflict?: Maybe<Chat_Room_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Room_Xref_UsersArgs = {
  objects: Array<Chat_Room_Xref_Users_Insert_Input>;
  on_conflict?: Maybe<Chat_Room_Xref_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Room_Xref_Users_OneArgs = {
  object: Chat_Room_Xref_Users_Insert_Input;
  on_conflict?: Maybe<Chat_Room_Xref_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_MessageArgs = {
  _set?: Maybe<Chat_Message_Set_Input>;
  where: Chat_Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Message_By_PkArgs = {
  _set?: Maybe<Chat_Message_Set_Input>;
  pk_columns: Chat_Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_RoomArgs = {
  _set?: Maybe<Chat_Room_Set_Input>;
  where: Chat_Room_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Room_By_PkArgs = {
  _set?: Maybe<Chat_Room_Set_Input>;
  pk_columns: Chat_Room_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Room_Xref_UsersArgs = {
  _set?: Maybe<Chat_Room_Xref_Users_Set_Input>;
  where: Chat_Room_Xref_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Room_Xref_Users_By_PkArgs = {
  _set?: Maybe<Chat_Room_Xref_Users_Set_Input>;
  pk_columns: Chat_Room_Xref_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "chat_message" */
  chat_message: Array<Chat_Message>;
  /** fetch aggregated fields from the table: "chat_message" */
  chat_message_aggregate: Chat_Message_Aggregate;
  /** fetch data from the table: "chat_message" using primary key columns */
  chat_message_by_pk?: Maybe<Chat_Message>;
  /** fetch data from the table: "chat_room" */
  chat_room: Array<Chat_Room>;
  /** fetch aggregated fields from the table: "chat_room" */
  chat_room_aggregate: Chat_Room_Aggregate;
  /** fetch data from the table: "chat_room" using primary key columns */
  chat_room_by_pk?: Maybe<Chat_Room>;
  /** fetch data from the table: "chat_room_xref_users" */
  chat_room_xref_users: Array<Chat_Room_Xref_Users>;
  /** An aggregate relationship */
  chat_room_xref_users_aggregate: Chat_Room_Xref_Users_Aggregate;
  /** fetch data from the table: "chat_room_xref_users" using primary key columns */
  chat_room_xref_users_by_pk?: Maybe<Chat_Room_Xref_Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootChat_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Query_RootChat_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Query_RootChat_Message_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_RoomArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Order_By>>;
  where?: Maybe<Chat_Room_Bool_Exp>;
};


export type Query_RootChat_Room_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Order_By>>;
  where?: Maybe<Chat_Room_Bool_Exp>;
};


export type Query_RootChat_Room_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootChat_Room_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};


export type Query_RootChat_Room_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};


export type Query_RootChat_Room_Xref_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "chat_message" */
  chat_message: Array<Chat_Message>;
  /** fetch aggregated fields from the table: "chat_message" */
  chat_message_aggregate: Chat_Message_Aggregate;
  /** fetch data from the table: "chat_message" using primary key columns */
  chat_message_by_pk?: Maybe<Chat_Message>;
  /** fetch data from the table: "chat_room" */
  chat_room: Array<Chat_Room>;
  /** fetch aggregated fields from the table: "chat_room" */
  chat_room_aggregate: Chat_Room_Aggregate;
  /** fetch data from the table: "chat_room" using primary key columns */
  chat_room_by_pk?: Maybe<Chat_Room>;
  /** fetch data from the table: "chat_room_xref_users" */
  chat_room_xref_users: Array<Chat_Room_Xref_Users>;
  /** An aggregate relationship */
  chat_room_xref_users_aggregate: Chat_Room_Xref_Users_Aggregate;
  /** fetch data from the table: "chat_room_xref_users" using primary key columns */
  chat_room_xref_users_by_pk?: Maybe<Chat_Room_Xref_Users>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootChat_MessageArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Subscription_RootChat_Message_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


export type Subscription_RootChat_Message_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_RoomArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Order_By>>;
  where?: Maybe<Chat_Room_Bool_Exp>;
};


export type Subscription_RootChat_Room_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Order_By>>;
  where?: Maybe<Chat_Room_Bool_Exp>;
};


export type Subscription_RootChat_Room_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootChat_Room_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};


export type Subscription_RootChat_Room_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};


export type Subscription_RootChat_Room_Xref_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  chat_messages: Array<Chat_Message>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Message_Aggregate;
  /** fetch data from the table: "chat_room_xref_users" */
  chat_room_xref_users: Array<Chat_Room_Xref_Users>;
  /** An aggregate relationship */
  chat_room_xref_users_aggregate: Chat_Room_Xref_Users_Aggregate;
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  image_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersChat_MessagesArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Message_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Message_Order_By>>;
  where?: Maybe<Chat_Message_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Room_Xref_UsersArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersChat_Room_Xref_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Chat_Room_Xref_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chat_Room_Xref_Users_Order_By>>;
  where?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  chat_messages?: Maybe<Chat_Message_Bool_Exp>;
  chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  chat_messages?: Maybe<Chat_Message_Arr_Rel_Insert_Input>;
  chat_room_xref_users?: Maybe<Chat_Room_Xref_Users_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  chat_messages_aggregate?: Maybe<Chat_Message_Aggregate_Order_By>;
  chat_room_xref_users_aggregate?: Maybe<Chat_Room_Xref_Users_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type ChatMessageFieldsFragment = { __typename?: 'chat_message', chat_room_id: any, created_at: any, id: any, message: string, user_id: string };

export type CreateChatMessageMutationVariables = Exact<{
  object: Chat_Message_Insert_Input;
}>;


export type CreateChatMessageMutation = { __typename?: 'mutation_root', insert_chat_message_one?: Maybe<{ __typename?: 'chat_message', chat_room_id: any, created_at: any, id: any, message: string, user_id: string }> };

export type MessagesByRoomSubscriptionVariables = Exact<{
  where?: Maybe<Chat_Message_Bool_Exp>;
}>;


export type MessagesByRoomSubscription = { __typename?: 'subscription_root', chat_message: Array<{ __typename?: 'chat_message', chat_room_id: any, created_at: any, id: any, message: string, user_id: string }> };

export type ChatRoomFieldsFragment = { __typename?: 'chat_room', id: any, name: string };

export type CreateChatRoomMutationVariables = Exact<{
  object: Chat_Room_Insert_Input;
}>;


export type CreateChatRoomMutation = { __typename?: 'mutation_root', insert_chat_room_one?: Maybe<{ __typename?: 'chat_room', id: any, name: string }> };

export type ChatRoomsWithUsersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type ChatRoomsWithUsersSubscription = { __typename?: 'subscription_root', chat_room: Array<{ __typename?: 'chat_room', id: any, name: string, chat_room_xref_users: Array<{ __typename?: 'chat_room_xref_users', id: any, user: { __typename?: 'users', id: string, email: string, display_name: string, image_url?: Maybe<string>, created_at: any, updated_at: any } }> }> };

export type ChatRoomDetailsSubscriptionVariables = Exact<{
  where?: Maybe<Chat_Room_Bool_Exp>;
}>;


export type ChatRoomDetailsSubscription = { __typename?: 'subscription_root', chat_room: Array<{ __typename?: 'chat_room', id: any, name: string, chat_messages: Array<{ __typename?: 'chat_message', chat_room_id: any, created_at: any, id: any, message: string, user_id: string, user: { __typename?: 'users', id: string, email: string, display_name: string, image_url?: Maybe<string>, created_at: any, updated_at: any } }> }> };

export type ChatRoomXrefUsersFieldsFragment = { __typename?: 'chat_room_xref_users', chat_room_id: any, id: any, user_id: string };

export type AddUserToChatRoomMutationVariables = Exact<{
  object: Chat_Room_Xref_Users_Insert_Input;
}>;


export type AddUserToChatRoomMutation = { __typename?: 'mutation_root', insert_chat_room_xref_users_one?: Maybe<{ __typename?: 'chat_room_xref_users', chat_room_id: any, id: any, user_id: string }> };

export type UserFieldsFragment = { __typename?: 'users', id: string, email: string, display_name: string, image_url?: Maybe<string>, created_at: any, updated_at: any };

export type UserUpsertMutationVariables = Exact<{
  object: Users_Insert_Input;
}>;


export type UserUpsertMutation = { __typename?: 'mutation_root', insert_users_one?: Maybe<{ __typename?: 'users', id: string, email: string, display_name: string, image_url?: Maybe<string>, created_at: any, updated_at: any }> };

export type UsersSubscriptionVariables = Exact<{
  where?: Maybe<Users_Bool_Exp>;
}>;


export type UsersSubscription = { __typename?: 'subscription_root', users: Array<{ __typename?: 'users', id: string, email: string, display_name: string, image_url?: Maybe<string>, created_at: any, updated_at: any }> };

export const ChatMessageFieldsFragmentDoc = gql`
    fragment ChatMessageFields on chat_message {
  chat_room_id
  created_at
  id
  message
  user_id
}
    `;
export const ChatRoomFieldsFragmentDoc = gql`
    fragment ChatRoomFields on chat_room {
  id
  name
}
    `;
export const ChatRoomXrefUsersFieldsFragmentDoc = gql`
    fragment ChatRoomXrefUsersFields on chat_room_xref_users {
  chat_room_id
  id
  user_id
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment UserFields on users {
  id
  email
  display_name
  image_url
  created_at
  updated_at
}
    `;
export const CreateChatMessageDocument = gql`
    mutation CreateChatMessage($object: chat_message_insert_input!) {
  insert_chat_message_one(object: $object) {
    ...ChatMessageFields
  }
}
    ${ChatMessageFieldsFragmentDoc}`;

export function useCreateChatMessageMutation() {
  return Urql.useMutation<CreateChatMessageMutation, CreateChatMessageMutationVariables>(CreateChatMessageDocument);
};
export const MessagesByRoomDocument = gql`
    subscription MessagesByRoom($where: chat_message_bool_exp) {
  chat_message(where: $where) {
    ...ChatMessageFields
  }
}
    ${ChatMessageFieldsFragmentDoc}`;

export function useMessagesByRoomSubscription<R = MessagesByRoomSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, MessagesByRoomSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<MessagesByRoomSubscription, R>) {
  return Urql.useSubscription<MessagesByRoomSubscription, R, MessagesByRoomSubscriptionVariables>({ query: MessagesByRoomDocument, ...options }, handler);
};
export const CreateChatRoomDocument = gql`
    mutation CreateChatRoom($object: chat_room_insert_input!) {
  insert_chat_room_one(object: $object) {
    ...ChatRoomFields
  }
}
    ${ChatRoomFieldsFragmentDoc}`;

export function useCreateChatRoomMutation() {
  return Urql.useMutation<CreateChatRoomMutation, CreateChatRoomMutationVariables>(CreateChatRoomDocument);
};
export const ChatRoomsWithUsersDocument = gql`
    subscription ChatRoomsWithUsers {
  chat_room {
    ...ChatRoomFields
    chat_room_xref_users {
      id
      user {
        ...UserFields
      }
    }
  }
}
    ${ChatRoomFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;

export function useChatRoomsWithUsersSubscription<R = ChatRoomsWithUsersSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, ChatRoomsWithUsersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<ChatRoomsWithUsersSubscription, R>) {
  return Urql.useSubscription<ChatRoomsWithUsersSubscription, R, ChatRoomsWithUsersSubscriptionVariables>({ query: ChatRoomsWithUsersDocument, ...options }, handler);
};
export const ChatRoomDetailsDocument = gql`
    subscription ChatRoomDetails($where: chat_room_bool_exp) {
  chat_room(where: $where) {
    ...ChatRoomFields
    chat_messages(order_by: {created_at: desc}) {
      ...ChatMessageFields
      user {
        ...UserFields
      }
    }
  }
}
    ${ChatRoomFieldsFragmentDoc}
${ChatMessageFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;

export function useChatRoomDetailsSubscription<R = ChatRoomDetailsSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, ChatRoomDetailsSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<ChatRoomDetailsSubscription, R>) {
  return Urql.useSubscription<ChatRoomDetailsSubscription, R, ChatRoomDetailsSubscriptionVariables>({ query: ChatRoomDetailsDocument, ...options }, handler);
};
export const AddUserToChatRoomDocument = gql`
    mutation AddUserToChatRoom($object: chat_room_xref_users_insert_input!) {
  insert_chat_room_xref_users_one(object: $object) {
    ...ChatRoomXrefUsersFields
  }
}
    ${ChatRoomXrefUsersFieldsFragmentDoc}`;

export function useAddUserToChatRoomMutation() {
  return Urql.useMutation<AddUserToChatRoomMutation, AddUserToChatRoomMutationVariables>(AddUserToChatRoomDocument);
};
export const UserUpsertDocument = gql`
    mutation UserUpsert($object: users_insert_input!) {
  insert_users_one(
    object: $object
    on_conflict: {constraint: users_pkey, update_columns: email}
  ) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUserUpsertMutation() {
  return Urql.useMutation<UserUpsertMutation, UserUpsertMutationVariables>(UserUpsertDocument);
};
export const UsersDocument = gql`
    subscription Users($where: users_bool_exp) {
  users(where: $where) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUsersSubscription<R = UsersSubscription>(options: Omit<Urql.UseSubscriptionArgs<never, UsersSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandlerArg<UsersSubscription, R>) {
  return Urql.useSubscription<UsersSubscription, R, UsersSubscriptionVariables>({ query: UsersDocument, ...options }, handler);
};