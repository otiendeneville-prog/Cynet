import { queryOptions } from "@tanstack/react-query";
import { getCourses, getPrograms, getServices } from "./catalog-functions";

export const coursesQuery = (input: { featuredOnly?: boolean; category?: string } = {}) =>
  queryOptions({
    queryKey: ["courses", input],
    queryFn: () => getCourses({ data: input }),
  });

export const programsQuery = () =>
  queryOptions({ queryKey: ["programs"], queryFn: () => getPrograms() });

export const servicesQuery = () =>
  queryOptions({ queryKey: ["services"], queryFn: () => getServices() });