type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObject = items.reduce((acc, current) => ({
    ...acc,
    [String(current[key])]: items.filter((item) => item[key] === current[key]),
  }), {});

  return groupedObject;
}
