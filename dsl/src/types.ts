/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint camelcase: 0 */
/* eslint no-use-before-define: 0 */

export type Condition = Record<string, any>

export interface QueryBlock {
  query: Record<string, any>
}

export interface MustClause {
  must: Condition[]
}

export interface MustNotClause {
  must_not: Condition[]
}

export interface ShouldClause {
  should: Condition[]
  minimum_should_match?: number
}

export interface FilterClause {
  filter: Condition[]
}

export interface BoolQuery<TOptions = BoolQueryOptions> {
  query: {
    bool: TOptions
  }
}

export interface BoolBlock {
  bool: BoolQueryOptions
}

export interface BoolQueryOptions {
  must?: Condition[] | BoolBlock[]
  must_not?: Condition[] | BoolBlock[]
  should?: Condition[] | BoolBlock[]
  filter?: Condition[] | BoolBlock[]
  minimum_should_match?: number
  _name?: string
}

export type AnyQuery = QueryBlock | BoolQueryOptions | Condition | Condition[]

export type AnyBoolQuery = BoolQuery | BoolQueryOptions | Condition | Condition[]

export type Aggregation = Record<string, any>

export type compiledFunction<TInput> = (input: TInput) => Record<string, any>;