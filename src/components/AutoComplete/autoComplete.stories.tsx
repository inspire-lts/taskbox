import { Story, Meta} from '@storybook/react'
import { AuotoCompleteProps, AutoComplete, DataSourceType } from './autoComplete'

export default {
  title: 'lts/AutoComplete',
  component: AutoComplete
} as Meta
interface LakerPlayerProps {
  value: string;
  number: number;
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}
interface test1Props {
  value: string;
  number: number;
}
  const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
  'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
  const lakersWithNumber = [
    {value: 'bradley', number: 11},
    {value: 'pope', number: 1},
    {value: 'caruso', number: 4},
    {value: 'cook', number: 2},
    {value: 'cousins', number: 15},
    {value: 'james', number: 23},
    {value: 'AD', number: 3},
    {value: 'green', number: 14},
    {value: 'howard', number: 39},
    {value: 'kuzma', number: 0},
  ]
  // const handleFetch = (query: string) => {
  //   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
  // }
  // const handleFetch = (query: string) => {
  //   return lakersWithNumber.filter(player => player.value.includes(query))
  // }
  // const renderOption = (item: DataSourceType<LakerPlayerProps>) => {
  //   return (
  //     <>
  //       <h2>Name: {item.value}</h2>
  //       <p>Number: {item.number}</p>
  //     </>
  //   )
  // }
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({items}) => {
        return items.slice(0, 10).map((item: any) => ({value: item.login, ...item}))
      })
  }
  const renderOption = (item: DataSourceType<{login: string, url: string}>) => {
    return (
      <>
        <h2>Name: {item.login}</h2>
        <p>url: {item.url}</p>
      </>
    )
  }
export const LTSAutoComplete: React.VFC<{}> = () => (
  <AutoComplete
    fetchSuggestions={handleFetch}
    renderOption={renderOption}
    width={500}
    />
)

// export const Default = (args) => (
//   <AutoCompleted dataArr={arr}
//       placeholder="test" renderOption={renderOption}
//       searchFunc={searchFunction} onSelect={handleSelect} {...args} />
// )
