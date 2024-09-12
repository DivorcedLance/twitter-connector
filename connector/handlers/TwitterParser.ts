import { DataContainer, DataType, log, ParseOptions, Parser } from '@tableau/taco-toolkit/handlers'

interface Tweet {
  Created_At: string;
  Likes: number;
  Retweets: number;
  Text: string;
  Tweet_count: number;
  Username: string;
}

export default class TwitterParser extends Parser<Tweet[]> {
  parse(fetcherResult: Tweet[], { dataContainer }: ParseOptions): DataContainer {
    const tableName = 'Twitter Data';
    log(`Parsing started for '${tableName}'`);

    const containerBuilder = Parser.createContainerBuilder(dataContainer);
    const { isNew, tableBuilder } = containerBuilder.getTable(tableName);

    // Definir las columnas de la tabla si es nueva
    if (isNew) {
      tableBuilder.setId('twitterData');
      tableBuilder.addColumnHeaders([
        { id: 'Tweet_count', dataType: DataType.Int },
        { id: 'Username', dataType: DataType.String },
        { id: 'Text', dataType: DataType.String },
        { id: 'Created_At', alias: 'Created At', dataType: DataType.String },
        { id: 'Retweets', dataType: DataType.Int },
        { id: 'Likes', dataType: DataType.Int },
      ]);
    }

    // Añadir las filas obtenidas del resultado del fetcher
    tableBuilder.addRows(
      fetcherResult.map((tweet) => ({
        Tweet_count: tweet.Tweet_count,
        Username: tweet.Username,
        Text: tweet.Text,
        Created_At: tweet.Created_At,
        Retweets: tweet.Retweets,
        Likes: tweet.Likes,
      }))
    );

    return containerBuilder.getDataContainer();
  }
}
