import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { useState } from 'react'
import { Label } from '@/components/ui/label'

type Inputs = {
  ig: string
  email: string
  type: string
  budget: number[]
  deadline: string
  description: string
}

export function Commissions() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({ defaultValues: { budget: [300] } })

  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault()
    console.log(data)
  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-8">
      <div className="font-semibold text-2xl tracking-tighter">
        Hey 👋, if u are interested in my service, fill in the form and lets work!
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8">
        <div className="flex flex-col w-full px-12 py-4 gap-2">
          <Input placeholder="Instagram" {...register('ig')} />
          <Input type="email" placeholder="Email" {...register('email')} />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <Select onValueChange={field.onChange} {...field}>
                <SelectTrigger>
                  <SelectValue placeholder="Commission type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="cover">Cover art</SelectItem>
                    <SelectItem value="animations-less-than-30s">Animations shorter than 30s</SelectItem>
                    <SelectItem value="animations-more-than-30s">Animations longer than 30s</SelectItem>
                    <SelectItem value="3d-model">3D model only</SelectItem>
                    <SelectItem value="other">Other (specify in description)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <Label htmlFor="budget">Budget</Label>
          <div className="flex gap-2 pb-2">
            <Controller
              control={control}
              name="budget"
              render={({ field }) => (
                <Slider
                  id="budget"
                  onValueChange={field.onChange}
                  min={50}
                  max={2000}
                  step={25}
                  className="w-[75%]"
                  {...field}
                />
              )}
            />
            {watch('budget') && <div className="text-sm">{watch('budget')} $</div>}
          </div>
          <Button type="submit">
            <Mail className="mr-2 h-4 w-4" /> Send
          </Button>
        </div>
      </form>
    </div>
  )
}
