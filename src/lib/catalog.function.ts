import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { COURSES, PROGRAMS, SERVICES, type Course } from "./site-data";

export const getCourses = createServerFn({ method: "GET" })
  .inputValidator((data: unknown) =>
    z
      .object({ featuredOnly: z.boolean().optional(), category: z.string().optional() })
      .default({})
      .parse(data ?? {}),
  )
  .handler(async ({ data }): Promise<Course[]> => {
    let list = COURSES;
    if (data.featuredOnly) list = list.filter((c) => c.featured);
    if (data.category && data.category !== "All")
      list = list.filter((c) => c.category === data.category);
    return list;
  });

export const getPrograms = createServerFn({ method: "GET" }).handler(async () => PROGRAMS);

export const getServices = createServerFn({ method: "GET" }).handler(async () => SERVICES);