import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <Skeleton height={5} />
      <ListItem>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
