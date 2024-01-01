type Words = {
  [key: string]: string;
};


class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }
  showAll() {
    return this.words;
  }
  count() {
    return Object.keys(this.words).length;
  }
  upsert(word: Word) {
    this.words[word.term] = word.def;
  }
  exists(term: string) {
    if (this.words[term] !== undefined) {
      console.log("해당 단어가 존재합니다.");
    } else {
      console.log("해당 단어가 존재하지 않습니다.");
    }
  }
  bulkAdd(wordList: Word[]) {
    for (const i in wordList) {
      if (wordList[i].term === undefined) {
        this.words[wordList[i].term] = wordList[i].def;
      }
    }
  }
  bulkDelete(terms: string[]) {
    for (const term of terms) {
      delete this.words[term];
    }
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly def: string
  ) {}
}

const kimchi = new Word("김치", "한국 음식");
const dict = new Dict();
dict.add(kimchi);
dict.def("kimchi");
