import './App.css'
import Game from './Game'
import Navbar from './Navbar'

export default function App() {
  const codeSnippets = [
    {
     code: 'class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
     desc: 'Hello World (Java)'
    },
    {
      code: 'def merge_dicts(...dicts)\n  super_dict = {}\n  for dict in dicts:\n    for k, v in dict.items():\n      super_dict[k] = v\n   return super_dict',
      desc: 'Merging multiple dictionaries (Python)'
    },
    {
      code: 'def merge(*args, missing_val = None):\n  max_length = max([len(lst) for lst in args])\n  out_list = [];\n  for i in range(max_length):\n    out_list.append([args[k][i] if i < len(args[k]) else missing_val for k in range(len(args))]\n  return out_list',
      desc: 'Merging list of lists (Python)'
    }
  ]

  return (
    <>
      <Navbar/>
      <Game codeSnippets={codeSnippets}/>
    </>
  )
}

